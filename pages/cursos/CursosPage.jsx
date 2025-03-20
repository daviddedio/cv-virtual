import { useState, useEffect, useContext } from 'react'
import { CursoItem, CursoItemSkeleton } from '../../componentes/CursoItem/CursoItem'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseReturnData'
import {Context} from '../../context/Context'
import { Buscador, BuscadorSkeleton } from '../../componentes/Buscador/Buscador';
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

    const cargarCategorias = (datos) => {
        const result = [];
        datos.forEach((it) => {
            if (!result.includes(it.Categoria)) {
                result.push(it.Categoria);
            }
        })
        setCategorias(result)
    }

    function filtrarCurso(dato) {
        if (dato === "todo") {
            setItem(cursos)
        } else {
            let temp = cursos.filter((con) => con.Categoria === dato)
            setItem(temp)
        }
    }

    const getDataFromFirebase = async () => {
        if (cursosContext) {
            cargarCategorias(cursosContext)
            setItem(cursosContext)
            setCursos(cursosContext)
            return
        }
        
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "Cursos"));
            const data = querySnapshot.docs.map(doc => Object.assign( {id:doc.id},doc.data()))
            setData(data.sort((a,b) => b.fInicio.seconds - a.fInicio.seconds))
            cargarCategorias(data)
            setItem(data)
            setCursos(data)
            setCursosContext(data)
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