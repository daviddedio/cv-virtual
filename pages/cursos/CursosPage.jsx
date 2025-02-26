import { datos, datosPrueba } from '../../FireBase/ReturnCursos'
import { useState, useEffect } from 'react'
import { CursoItem } from '../../componentes/CursoItem/CursoItem'
import './CursosPage.css'

export const CursoPage = () => {
    const [cursos, setcursos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [item, setItem] = useState([])

    var keyItem = 1

    const cargarInformacion = async () => {
        const temp = datosPrueba.sort((a, b) => b.fInicio.seconds - a.fInicio.seconds)

        const result = [];
        temp.forEach((item) => {
            if (!result.includes(item.Categoria)) {
                result.push(item.Categoria);
            }
        })

        setCategorias(result)
        setcursos(temp)
        setItem(temp)
    }

    useEffect(() => {
        cargarInformacion()
    }, [])

    function filtrarCurso(dato) {
        if (dato === "todo") {
            setItem(cursos)
        } else {
            let temp = cursos.filter((con) => con.Categoria === dato)
            setItem(temp)
        }
    }

    return (
        <>
            <div className="buscadorCurso">
                <div className="seleccionCategorias">
                    <label htmlFor="Cursos">Seleccionar categoria:</label>
                    <select name="Cursos" id="Cursos" onChange={e => filtrarCurso(e.target.value)}>
                        <option value="todo">...</option>
                        {
                            categorias.map((item) =>
                                <option value={item} key={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
                <p>{item.length} Selecciones</p>
            </div>
            <div className='informacionCursos'>
                <div>
                    {
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