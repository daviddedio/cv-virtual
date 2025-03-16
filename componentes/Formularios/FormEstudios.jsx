import { useState, useEffect, useContext } from "react"
import { Buscador, BuscadorSkeleton } from '../Buscador/Buscador'
import { Context } from "../../context/Context"
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from '../../FireBase/FireBaseReturnData';
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

    const cargarCategorias = (datos) => {
        const result = [];
        datos.forEach((it) => {
            if (!result.includes(it.Nombre)) {
                result.push(it.Nombre);
            }
        })
        setCategorias(result)
    }

    const getDataFromFirebase = async () => {
        if (estudiosContext) {
            setEstudios(estudiosContext)
            cargarCategorias(estudiosContext)
            return
        }
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "Estudios"));
            const data = querySnapshot.docs.map(doc => Object.assign({ id: doc.id }, doc.data()))
            cargarCategorias(data)
            setData(data.sort((a, b) => b.Orden - a.Orden))
            setEstudios(data)
            setEstudiosContext(data)
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
        console.log(id)
        try {
            if (id) {
                console.log(inputForm)
                const docRef = await addDoc(collection(db, "Estudios"), {
                    Imagen: imagen,
                    Info: info,
                    Nombre: nombre,
                    Orden: parseInt(orden),
                    Universidad: universidad
                })
                setEstudiosContext('')
                mostrarModal(`Nuevo estudio agregado. Su ID es ${docRef.id}`)
            } else {
                await setDoc(doc(db, "Estudios", id), {
                    Imagen: imagen,
                    Info: info,
                    Nombre: nombre,
                    Orden: orden,
                    Universidad: universidad
                })
                //throw new error
                setEstudiosContext('')
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

    const deleteEstudio = (e) => {
        e.preventDefault()
        alert('eliminando')
    }

    return (
        <>
            <div className="formHeader">
                <h2>Actualizar Informacion General, contacto y redes</h2>
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
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        placeholder="Ingresar Nombre de estudio"
                        onChange={actualizarDatos}></input>

                    <label htmlFor="orden">Orden</label>
                    <input type="text"
                        id="orden"
                        name="orden"
                        placeholder="Ingresar orden"
                        value={orden} onChange={actualizarDatos} />

                    <label htmlFor="universidad">Universidad</label>
                    <input type="text" id="universidad" name="universidad" placeholder="Nombre Universidad" value={universidad} onChange={actualizarDatos} />

                    <label htmlFor="info">Informacion</label>
                    <input type="text" id="info" name="info" placeholder="Fecha de ingreso - Fecha de finalizacion : Titulo intermedio" value={info} onChange={actualizarDatos} />

                    <label htmlFor="imagen">ImagenURL</label>
                    <input type="text" id="imagen" name="imagen" placeholder="Ingresar direccion de imagen" value={imagen} onChange={actualizarDatos} />

                    <input className={`btnSubmit ${loading && `uploading`} ${error && `uploadingError`}`} type="submit" value={loading ? "Uploading..." : (error ? "Error..." : "submit")} />
                </form>
            </div>
        </>
    )
}
