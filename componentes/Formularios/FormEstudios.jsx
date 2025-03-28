import { useState, useEffect, useContext } from "react"
import { Buscador, BuscadorSkeleton } from '../Buscador/Buscador'
import { Context } from "../../context/Context"
import { getSomeDataFromFirebase, updateDocument, addDocument, deleteDocument } from "../../FireBase/FireBaseReturnData";
import { settear, cargarCat } from "../../Utilidades/Utilidades";
import { useModalContext } from "../modal/context/ModalContext";
import { CustomAlert } from "../Alerta/CustomAlert";

export const FormEstudios = () => {
    const { setComponente, setState } = useModalContext()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [estudios, setEstudios] = useState('')
    const [data, setData] = useState('')
    const [categorias, setCategorias] = useState([])
    const { estudiosContext, setEstudiosContext } = useContext(Context)

    const [inputForm, setInputForm] = useState({
        id: 'New',
        imagen: '',
        info: '',
        nombre: '',
        orden: estudios.length + 1,
        universidad: ''
    })

    const { imagen, info, nombre, orden, universidad, id } = inputForm

    const actualizarDatos = ({ target }) => {
        const { name, value, type, checked } = target
        setInputForm({
            ...inputForm, [name]: value
        })
    }

    const getDataFromFirebase = async () => {
        if (estudiosContext) {
            setEstudios(estudiosContext)
            cargarCat(estudiosContext, setCategorias, "Nombre")
            return
        }
        setLoading(true)
        try {
            const datos = await getSomeDataFromFirebase("Estudios")
            const datosOrdenados = datos.sort((a, b) => b.Orden - a.Orden)
            settear([setData, setEstudios, setEstudiosContext], datosOrdenados)
            cargarCat(datosOrdenados, setCategorias, "Nombre")
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataFromFirebase()
    }, [])

    const modoEditarDatos = (value) => {
        const datoSeleccionado = estudios.filter(item => item.Nombre === value)
        if (value === 'todo') {
            setInputForm(
                {
                    id: 'New',
                    imagen: '',
                    info: '',
                    nombre: '',
                    orden: estudios.length + 1,
                    universidad: ''
                }
            )
        } else {
            setInputForm(
                {
                    id: datoSeleccionado[0].id,
                    imagen: datoSeleccionado[0].Imagen,
                    info: datoSeleccionado[0].Info,
                    nombre: datoSeleccionado[0].Nombre,
                    orden: datoSeleccionado[0].Orden,
                    universidad: datoSeleccionado[0].Universidad
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
            if (id === "New") {
                console.log(inputForm)
                const docRef = await addDocument("Estudios", {
                    Imagen: imagen,
                    Info: info,
                    Nombre: nombre,
                    Orden: parseInt(orden),
                    Universidad: universidad
                })
                setEstudiosContext('')
                mostrarModal(`Nuevo estudio agregado. Su ID es ${docRef.id}`)
            } else {
                await updateDocument("Estudios", id, {
                    Imagen: imagen,
                    Info: info,
                    Nombre: nombre,
                    Orden: orden,
                    Universidad: universidad
                })
                setEstudiosContext('')
                mostrarModal("Datos cargados correctamente, refrescar la pagina para ver la actualizacion de estos datos", 0)
            }
        } catch (error) {
            mostrarModal("Ha ocurrido un error, refrescar la pagina para ver la actualizacion de estos datos", 3)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const deleteEstudio = (e) => {
        e.preventDefault()
        var status = confirm(`seguro que quieres borrar este documento ${id} - ${nombre}?`)
        if (status === true) {
            setLoading(true)
            try {
                deleteDocument("Estudios", id)
                setEstudiosContext("")
                mostrarModal("Datos eliminados correctamente, refrescar la pagina para ver la actualizacion de estos datos", 0)
            } catch (error) {
                mostrarModal("Ha ocurrido un error, refrescar la pagina para ver la actualizacion de estos datos", 3)
                setError(error)
            }finally{
                setLoading(false)
            }
        }
    }

    return (
        <>
            <div className="formHeader">
                <h2>Actualizar Informacion de estudios</h2>
            </div>

            {loading ? <BuscadorSkeleton /> : <Buscador cat={categorias} filtro={modoEditarDatos} />}
            <hr />
            <div className="displayForm">
                <form onSubmit={cargarDatos} className="formEditData">
                    <div className="rowEstudio">
                        {id != 'New' && <button onClick={deleteEstudio}><i className="fa-solid fa-trash"></i></button>}
                        <h3>{`ID: ${id}`}</h3>
                    </div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text"
                        id="nombreEst"
                        name="nombre"
                        value={nombre}
                        placeholder="Ingresar Nombre de estudio"
                        onChange={actualizarDatos}></input>

                    <label htmlFor="orden">Orden</label>
                    <input type="text"
                        id="ordenEst"
                        name="orden"
                        placeholder="Ingresar orden"
                        value={orden} onChange={actualizarDatos} />

                    <label htmlFor="universidad">Universidad</label>
                    <input type="text" id="universidadEst" name="universidad" placeholder="Nombre Universidad" value={universidad} onChange={actualizarDatos} />

                    <label htmlFor="info">Informacion</label>
                    <input type="text" id="infoEst" name="info" placeholder="Fecha de ingreso - Fecha de finalizacion : Titulo intermedio" value={info} onChange={actualizarDatos} />

                    <label htmlFor="imagen">ImagenURL</label>
                    <input type="text" id="imagenEst" name="imagen" placeholder="Ingresar direccion de imagen" value={imagen} onChange={actualizarDatos} />

                    <input className={`btnSubmit ${loading && `uploading`} ${error && `uploadingError`}`} type="submit" value={loading ? "Uploading..." : (error ? "Error..." : "submit")} />
                </form>
            </div>
        </>
    )
}
