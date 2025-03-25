import { useState, useEffect, useContext } from 'react'
import { KnowCard, KnowCardSkeleton } from '../../componentes/KnowCard/KnowCard'
import { Context } from '../../context/Context'
import { getSomeDataFromFirebase } from '../../FireBase/FireBaseReturnData'
import { Buscador, BuscadorSkeleton } from '../../componentes/Buscador/Buscador';
import { cargarCat, handleFilter, settear} from '../../Utilidades/Utilidades'
import './ConocimientosPage.css'

export const ConocimientosPage = () => {

    //useStates
    const [conocimientos, setConocimientos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [item, setItem] = useState([]) //el que se usa
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { conocimientosContext, setConocimientosContext } = useContext(Context)

    //otras variables
    var keyItem = 1

    //funciones o utilidades
    const cargarCategorias = (dato) => {cargarCat(dato, setCategorias,"Categoria")}
    const filtrar = (dato) => {handleFilter(dato, conocimientos,"Categoria", setItem)}

    const getDataFromFirebase = async () => {
        if (conocimientosContext) {
            settear([cargarCategorias, setItem, setConocimientos], conocimientosContext)
            return
        }
        setLoading(true)
        try {
            const datos = await getSomeDataFromFirebase('Conocimiento')
            settear([cargarCategorias, setData, setItem, setConocimientos, setConocimientosContext], datos)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    //useEffect
    useEffect(() => {
        getDataFromFirebase()
    }, [])

    //returns
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