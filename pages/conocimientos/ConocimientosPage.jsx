import { useState, useEffect, useContext } from 'react'
import { KnowCard } from '../../componentes/KnowCard/KnowCard'
import { KnowCardSkeleton } from '../../componentes/KnowCard/KnowCardSkeleton';
import { Context } from '../../context/Context'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseReturnData'
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
            setItem(conocimientosContext)
            setConocimientos(conocimientosContext)
            cargarCategorias(conocimientosContext)
            console.log('from Context')
            return
        }
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "Conocimiento"));
            const data = querySnapshot.docs.map(doc => doc.data())
            setData(data)
            setItem(data)
            setConocimientos(data)
            setConocimientosContext(data)
            cargarCategorias(data)
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
            <div className="buscador">
                <div className="seleccionCategorias">
                    <label htmlFor="Conocimientos">Seleccionar categoria:</label>
                    <select name="Conocimientos" id="Conocimientos" onChange={e => filtrar(e.target.value)}>
                        <option value="todo">...</option>
                        {
                            categorias.map((itm) =>
                                <option value={itm} key={itm}>{itm === "Lenguaje" ? "Lenguajes y Frameworks" : itm}</option>
                            )
                        }
                    </select>
                </div>
                <p>{item.length} Selecciones</p>
            </div>
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