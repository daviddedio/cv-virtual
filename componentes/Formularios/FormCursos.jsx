import { useState, useEffect, useContext } from "react"
import { Buscador, BuscadorSkeleton } from '../Buscador/Buscador'
import { Context } from "../../context/Context"
import { useModalContext } from "../modal/context/ModalContext";
import { CustomAlert } from "../Alerta/CustomAlert";
import { Timestamp } from "firebase/firestore"
import { getSomeDataFromFirebase, updateDocument, addDocument, deleteDocument } from "../../FireBase/FireBaseReturnData";
import { cargarCat, settear } from "../../Utilidades/Utilidades";

export const FormCursos = () => {
    const { setComponente, setState } = useModalContext()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [curso, setCurso] = useState('')
    const [data, setData] = useState('')
    const [categorias, setCategorias] = useState([])
    const { cursosContext, setCursosContext } = useContext(Context)

    const [inputForm, setInputForm] = useState({
        nombre: '', informacion: '', categoria: '', comentario: '', fotodir: '', finicio: '', id: 'New'
    })

    const { nombre, informacion, categoria, comentario, fotodir, finicio, id } = inputForm

    const actualizarDatos = ({ target }) => {
        const { name, value, type, checked } = target
        setInputForm({
            ...inputForm, [name]: value
        })
    }

    const getDataFromFirebase = async () => {
        if (cursosContext) {
            let temp = cursosContext.sort(function (a, b) {
                if (a.Nombre < b.Nombre) { return -1; }
                if (a.Nombre > b.Nombre) { return 1; }
                return 0;
            })
            setCurso(temp)
            cargarCat(temp, setCategorias, "Nombre")
            return
        }
        setLoading(true)
        try {
            const datos = await getSomeDataFromFirebase("Cursos")
            let temp = datos.sort(function (a, b) {
                if (a.Nombre < b.Nombre) { return -1; }
                if (a.Nombre > b.Nombre) { return 1; }
                return 0;
            })
            cargarCat(temp, setCategorias, "Nombre")
            settear([setData, setCurso, setCursosContext], temp)
        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const modoEditarDatos = (value) => {
        const datoSeleccionado = curso.filter(item => item.Nombre === value)
        if (value === 'todo') {
            setInputForm(
                {
                    nombre: ''
                    , informacion: ''
                    , categoria: ''
                    , comentario: ''
                    , fotodir: ''
                    , finicio: ''
                    , id: 'New'
                }
            )
        } else {
            setInputForm(
                {
                    nombre: datoSeleccionado[0].Nombre,
                    informacion: datoSeleccionado[0].Informacion,
                    categoria: datoSeleccionado[0].Categoria,
                    comentario: datoSeleccionado[0].Comentarios,
                    fotodir: datoSeleccionado[0].FotoDir,
                    finicio: datoSeleccionado[0].fInicio.toDate().toISOString().split("T")[0],
                    id: datoSeleccionado[0].id
                }
            )
        }
    }

    const mostrarModal = (mensaje, type) => {
        setComponente(<CustomAlert mensaje={mensaje} ntype={type} />)
        setState(true)
    }

    const cargarDatos = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (id === 'New') {
                const docRef = await addDocument("Cursos", {
                    Nombre: nombre
                    , Informacion: informacion
                    , Categoria: categoria
                    , Comentarios: comentario
                    , FotoDir: fotodir
                    , fInicio: Timestamp.fromDate(new Date(finicio))
                } )
                setCursosContext('')
                mostrarModal(`Nuevo curso agregado. Su ID es ${docRef.id}`)
            } else {
                await updateDocument("Cursos", id, {
                    Nombre: nombre
                    , Informacion: informacion
                    , Categoria: categoria
                    , Comentarios: comentario
                    , FotoDir: fotodir
                    , fInicio: Timestamp.fromDate(new Date(finicio))
                })
                setCursosContext('')
                mostrarModal("Datos cargados correctamente, refrescar la pagina para ver la actualizacion de estos datos", 0)
            }
        } catch (error) {
            mostrarModal("Ha ocurrido un error, refrescar la pagina para ver la actualizacion de estos datos", 3)
            setError(error)
            console.log(error)

        } finally {
            setLoading(false)
        }
    }

    const borrarDato = async (e) => {
        e.preventDefault()
        if (id === "New" || id === '') {
            alert('Es un nuevo documento')
            return
        }
        var status = confirm(`seguro que quieres borrar este documento ${id} - ${nombre}?`)
        if (status === true) {
            setLoading(true)
            try {
                await deleteDocument("Cursos", id)
                setCursosContext('')
                mostrarModal("Dato eliminado correctamente, refrescar la pagina para ver la actualizacion de estos datos", 0)
            } catch (error) {
                mostrarModal("Ha ocurrido un error, refrescar la pagina para ver la actualizacion de estos datos", 3)
                setError(error)
            } finally {
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        getDataFromFirebase()
    }, [cursosContext])

    return (
        <>
            <div className="formHeader">
                <h2>Actualizar Cursos realizados</h2>
            </div>

            {loading ? <BuscadorSkeleton /> : <Buscador cat={categorias} filtro={modoEditarDatos} />}
            <hr />
            <div className="displayForm">
                <form onSubmit={cargarDatos} className="formEditData">
                    <div className="rowEstudio">
                        {id != 'New' && <button onClick={borrarDato}><i className="fa-solid fa-trash"></i></button>}
                        <h3>{`ID: ${id}`}</h3>
                    </div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text"
                        id="nombreCurso"
                        name="nombre"
                        value={nombre}
                        placeholder="Ingresar Nombre de estudio"
                        onChange={actualizarDatos}></input>

                    <label htmlFor="informacion">Informacion</label>
                    <input type="text"
                        id="informacionCurso"
                        name="informacion"
                        placeholder="Ingresar orden"
                        value={informacion} onChange={actualizarDatos} />

                    <label htmlFor="categoria">Categoria</label>
                    <input type="text" id="categoriaCurso" name="categoria" placeholder="Nombre Universidad" value={categoria} onChange={actualizarDatos} />

                    <label htmlFor="comentario">comentario</label>
                    <input type="text" id="comentarioCurso" name="comentario" placeholder="comentario" value={comentario} onChange={actualizarDatos} />

                    <label htmlFor="fotodir">ImagenURL</label>
                    <input type="text" id="fotodirCurso" name="fotodir" placeholder="Ingresar direccion de imagen" value={fotodir} onChange={actualizarDatos} />

                    <label htmlFor="finicio">Fecha inicio</label>
                    <input type="date" id="finicioCurso" name="finicio"
                        placeholder="Ingresar telefono fijo y/o celular" value={finicio} onChange={actualizarDatos} />

                    <input className={`btnSubmit ${loading && `uploading`} ${error && `uploadingError`}`} type="submit" value={loading ? "Uploading..." : (error ? "Error..." : "submit")} />
                </form>
            </div>
        </>
    )
}
