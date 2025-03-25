import { useState, useEffect, useContext } from 'react'
import { CursoItem, CursoItemSkeleton } from '../../componentes/CursoItem/CursoItem'
import { getSomeDataFromFirebase } from '../../FireBase/FireBaseReturnData'
import {Context} from '../../context/Context'
import { Buscador, BuscadorSkeleton } from '../../componentes/Buscador/Buscador';
import {cargarCat, handleFilter, settear} from '../../Utilidades/Utilidades'
import './CursosPage.css'

export const CursoPage = () => {
    const [cursos, setCursos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [item, setItem] = useState([])
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {cursosContext, setCursosContext} = useContext(Context)

    var keyItem = 1

    //utilidades
    const cargarCategorias = (dato) => {cargarCat(dato,setCategorias,"Categoria")}
    const filtrarCurso = (dato) => {handleFilter(dato, cursos, "Categoria", setItem)}

    const getDataFromFirebase = async () => {
        if (cursosContext) {
            settear([cargarCategorias, setItem, setCursos], cursosContext)
            return
        }
        
        setLoading(true)
        try {
            const datos = await getSomeDataFromFirebase('Cursos')
            settear([cargarCategorias, setItem, setCursos, setData, setCursosContext],datos.sort((a,b) => b.fInicio.seconds - a.fInicio.seconds) )
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataFromFirebase()
    }, [])

    if (error) {
        return <p>Error</p>
    }

    return (
        <>
            {
            
            loading ? <BuscadorSkeleton/> : <Buscador cat={categorias} filtro={filtrarCurso}/>
            }
            <div className='informacionCursos'>
                <div>
                    {   loading ?
                        Array.from({ length: 10 }).map((it, index) =>
                        index % 2 == 0 ? <CursoItemSkeleton clase="cursoBgGray skeleton" key={`skeleton ${index}`}/> : <CursoItemSkeleton  clase="" key={`skeleton ${index}`}/> 
                        )
                        :
                        item.map(ite => <CursoItem
                            nombre={ite.Nombre}
                            comentarios={ite.Comentarios}
                            informacion={ite.Informacion}
                            imagen = {ite.FotoDir}
                            key={keyItem++}
                            clase={keyItem%2==0 ? "cursoConteiner" : "cursoConteiner cursoBgGray"}
                        />)
                    }
                </div>
            </div>
        </>
    )
}