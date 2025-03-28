import { useState, useEffect, useContext } from "react"
import { Buscador, BuscadorSkeleton } from '../Buscador/Buscador'
import { Context } from "../../context/Context"
import { doc, setDoc, addDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from '../../FireBase/FireBaseReturnData';
import { useModalContext } from "../modal/context/ModalContext";
import { CustomAlert } from "../Alerta/CustomAlert";
import { getSomeDataFromFirebase, updateDocument, addDocument, deleteDocument } from "../../FireBase/FireBaseReturnData";
import { cargarCat, settear } from "../../Utilidades/Utilidades";

export const FormConocimiento = () => {
    const { setComponente, setState } = useModalContext()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [conocimiento, setConocimiento] = useState('')
    const [data, setData] = useState('')
    const [categorias, setCategorias] = useState([])
    const { conocimientosContext, setConocimientosContext } = useContext(Context)

    const [inputForm, setInputForm] = useState({
        cat: '', con: '', nivel: '', info: '', id: 'New'
    })

    const { cat, con, nivel, info, id } = inputForm

    const actualizarDatos = ({ target }) => {
        const { name, value, type, checked } = target
        setInputForm({
            ...inputForm, [name]: value
        })
    }

    const getDataFromFirebase = async () => {
        if (conocimientosContext) {
            let temp = conocimientosContext.sort(function (a, b) {
                if (a.Con < b.Con) { return -1; }
                if (a.Con > b.Con) { return 1; }
                return 0;
            })
            setConocimiento(temp)
            cargarCat(temp, setCategorias, "Con")
            return
        }
        setLoading(true)
        try {
            const datos = await getSomeDataFromFirebase("Conocimiento")
            let temp = datos.sort(function (a, b) {
                if (a.Con < b.Con) { return -1; }
                if (a.Con > b.Con) { return 1; }
                return 0;
            })
            cargarCat(temp, setCategorias, "Con")
            settear([setData, setConocimiento, setConocimientosContext], temp)
        } catch (error) {
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const modoEditarDatos = (value) => {
        const datoSeleccionado = conocimiento.filter(item => item.Con === value)
        if (value === 'todo') {
            setInputForm({ cat: '', con: '', nivel: '', info: '', id: 'New' })
        } else {
            setInputForm({
                cat: datoSeleccionado[0].Categoria, con: datoSeleccionado[0].Con, nivel: datoSeleccionado[0].Nivel, info: datoSeleccionado[0].info, id: datoSeleccionado[0].id
            })
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
                const docRef = await addDocument("Conocimiento", {
                    Categoria: cat, Con: con, Nivel: nivel, info: info
                })
                setConocimientosContext('')
                mostrarModal(`Nuevo curso agregado. Su ID es ${docRef.id}`)
            } else {
                await updateDocument("Conocimiento", id, {
                    Categoria: cat, Con: con, Nivel: nivel, info: info
                })
                setConocimientosContext('')
                mostrarModal("Datos cargados correctamente, refrescar la pagina para ver la actualizacion de estos datos", 0)
            }
        } catch (error) {
            mostrarModal("Ha ocurrido un error, refrescar la pagina para ver la actualizacion de estos datos", 3)
            setError(error)
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
                await deleteDocument("Conocimiento", id)
                setConocimientosContext('')
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
    }, [])

    return (
        <>
            <div className="formHeader">
                <h2>Actualizar Conocimientos</h2>
            </div>

            {loading ? <BuscadorSkeleton /> : <Buscador cat={categorias} filtro={modoEditarDatos} />}
            <hr />
            <div className="displayForm">
                <form onSubmit={cargarDatos} className="formEditData">
                    <div className="rowEstudio">
                        {id != 'New' && <button onClick={borrarDato}><i className="fa-solid fa-trash"></i></button>}
                        <h3>{`ID: ${id}`}</h3>
                    </div>
                    <label htmlFor="cat">Categoria</label>
                    <input type="text"
                        id="catCon"
                        name="cat"
                        value={cat}
                        placeholder="Cargar una categoria"
                        onChange={actualizarDatos}></input>

                    <label htmlFor="con">Conocimiento</label>
                    <input type="text"
                        id="conCon"
                        name="con"
                        placeholder="Cargar conocimiento"
                        value={con} onChange={actualizarDatos} />

                    <label htmlFor="nivel">Indicar Nivel</label>
                    <input type="text" id="nivelCon" name="nivel" placeholder="Indicar Nivel" value={nivel} onChange={actualizarDatos} />

                    <label htmlFor="info">Informacion</label>
                    <input type="text" id="infoCon" name="info" placeholder="Informacion del conocimiento" value={info} onChange={actualizarDatos} />
                    <input className={`btnSubmit ${loading && `uploading`} ${error && `uploadingError`}`} type="submit" value={loading ? "Uploading..." : (error ? "Error..." : "submit")} />
                </form>
            </div>
        </>
    )
}