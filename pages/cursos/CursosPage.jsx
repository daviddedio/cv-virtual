import { useState, useEffect, useContext } from 'react'
import { CursoItem } from '../../componentes/CursoItem/CursoItem'
import { CursoItemSkeleton } from '../../componentes/CursoItem/CursoItemSkeleton';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseReturnData'
import {Context} from '../../context/Context'
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
        console.log(dato)
        if (dato === "todo") {
            setItem(cursos)
        } else {
            let temp = cursos.filter((con) => con.Categoria === dato)
            setItem(temp)
        }
    }

    const getDataFromFirebase = async () => {
        if (cursosContext) {
            setItem(cursosContext)
            setCursos(cursosContext)
            cargarCategorias(cursosContext)
            console.log('from Context')
            return
        }
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "Cursos"));
            const data = querySnapshot.docs.map(doc => doc.data())
            setData(data.sort((a,b) => b.fInicio.seconds - a.fInicio.seconds))
            setItem(data)
            setCursos(data)
            setCursosContext(data)
            cargarCategorias(data)
            console.log('From hook')
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

    if (error) {
        return <p>Error</p>
    }

    return (
        <>
            <div className="buscadorCurso">
                <div className="seleccionCategorias">
                    <label htmlFor="Cursos">Seleccionar categoria:</label>
                    <select name="Cursos" id="Cursos" onChange={e => filtrarCurso(e.target.value)}>
                        <option value="todo">...</option>
                        {
                            categorias.map((itm) =>
                                <option value={itm} key={itm}>{itm}</option>
                            )
                        }
                    </select>
                </div>
                <p>{item.length} Selecciones</p>
            </div>
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