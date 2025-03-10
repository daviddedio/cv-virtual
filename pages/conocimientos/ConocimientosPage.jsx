import { useState, useEffect, useContext } from 'react'
import { KnowCard, KnowCardSkeleton } from '../../componentes/KnowCard/KnowCard'
import { Context } from '../../context/Context'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseReturnData'
import { Buscador, BuscadorSkeleton } from '../../componentes/Buscador/Buscador';
import './ConocimientosPage.css'

export const ConocimientosPage = () => {

    const [conocimientos, setConocimientos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [item, setItem] = useState([]) //el que se usa
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { conocimientosContext, setConocimientosContext } = useContext(Context)

    var keyItem = 1

    const cargarCategorias = (dato) => {
        const result = [];
        dato.forEach((item) => {
            if (!result.includes(item.Categoria)) {
                result.push(item.Categoria);
            }
        })
        setCategorias(result)
    }

    const getDataFromFirebase = async () => {
        if (conocimientosContext) {
            cargarCategorias(conocimientosContext)
            setItem(conocimientosContext)
            setConocimientos(conocimientosContext)
            return
        }
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "Conocimiento"));
            const data = querySnapshot.docs.map(doc => doc.data())
            cargarCategorias(data)
            setData(data)
            setItem(data)
            setConocimientos(data)
            setConocimientosContext(data)
        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataFromFirebase()
    }, [])

    function filtrar(dato) {
        if (dato === "todo") {
            setItem(conocimientos)
        } else {
            let temp = conocimientos.filter((con) => con.Categoria === dato)
            setItem(temp)
        }
    }

    return (
        <>
            {
                loading ? <BuscadorSkeleton/> : <Buscador cat={categorias} filtro={filtrar}/>
            }
            <div className='informacionConocimiento'>
                {
                    loading ?
                        Array.from({ length: 10 }).map((it, index) =>
                            <KnowCardSkeleton key={index}/>)
                        : item.map(ite => <KnowCard con={ite.Con} nivel={ite.Nivel} info={ite.info} key={keyItem++} />)
                }
            </div>
        </>
    )
}