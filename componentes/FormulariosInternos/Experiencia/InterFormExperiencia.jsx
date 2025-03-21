import '../../Formularios/FormStyles.css'
import { useEffect, useState, useContext } from 'react'
import { ListadoItems } from '../../ListadoItems/ListadoItems'
import { useModalContext } from '../../modal/context/ModalContext'
import { CustomAlert } from '../../../componentes/Alerta/CustomAlert'
import { db } from '../../../FireBase/FireBaseReturnData'
import { Context } from '../../../context/Context'
import { doc, setDoc, collection, addDoc} from "firebase/firestore";
import { Timestamp } from "firebase/firestore"

export const InterFormExperiencia = ({ objeto, tipo }) => {
    const { setComponente, setState } = useModalContext()
    const { setExperienciaContext } = useContext(Context)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { Id, Area, Empresa, Imagen, Resumen, Tareas, fInicio } = objeto
    const [itemTarea, setItemTarea] = useState(Tareas)

    useEffect(() => {
        console.log()
    }, [])

    //metodo del formulario
    const [inputForm, setInputForm] = useState(tipo ? {
        id: Id,
        area: Area,
        empresa: Empresa,
        imagen: Imagen,
        resumen: Resumen,
        tareas: Tareas,
        finicio: fInicio.toDate().toISOString().split("T")[0]
    } : {
        id: '',
        area: '',
        empresa: '',
        imagen: '',
        resumen: '',
        tareas: [],
        finicio: new Date().toISOString().split("T")[0]

    })

    const { area, empresa, imagen, resumen, tareas, finicio, id } = inputForm

    const actualizarTareas = (newTareas) => {
        //setItemTarea(newTareas)
        inputTareas(newTareas)
    }

    const actualizarDatos = ({ target }) => {
        const { name, value, type, checked } = target
        console.log(finicio)
        setInputForm({
            ...inputForm, [name]: type === 'checkbox' ? (checked ? "Activa" : "No activa") : value
        })
    }

    const inputTareas = (nuevasTareas) => {
        setInputForm({ ...inputForm, tareas: nuevasTareas })
    }

    const enviarDatos = (e) => {
        e.preventDefault()
        inputTareas()
    }

    const cargarDatos = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (tipo) {
                await setDoc(doc(db, "Experiencia", id), {
                    Area: area,
                    Empresa: empresa,
                    Imagen: imagen,
                    Resumen: resumen,
                    Tareas: tareas,
                    fInicio: Timestamp.fromDate(new Date(finicio))
                })
                //throw new error
                setExperienciaContext('')
                mostrarModal("Datos cargados correctamente, refrescar la pagina para ver la actualizacion de estos datos", 0)
            } else {
                const docRef = await addDoc(collection(db, "Experiencia"), {
                    Area: area,
                    Empresa: empresa,
                    Imagen: imagen,
                    Resumen: resumen,
                    Tareas: tareas,
                    fInicio: Timestamp.fromDate(new Date(finicio))
                })
                setExperienciaContext('')
                mostrarModal(`Nueva experiencia agregada. Su ID es ${docRef.id}`)
            }

        } catch (error) {
            mostrarModal("Ha ocurrido un error, refrescar la pagina para ver la actualizacion de estos datos", 3)
            setError(error)

        } finally {
            setLoading(false)
        }
    }

    const mostrarModal = (mensaje, type) => {
        setComponente(<CustomAlert mensaje={mensaje} ntype={type} />)
        setState(true)
    }

    return (
        <>
            {loading ? <p><img src="../../../src/assets/circleSpinnWhite.svg" alt="" /></p> :
                <form onSubmit={cargarDatos} className="formEditData">
                    <h3>Id documento: {id}</h3>
                    <label htmlFor="empresa">Empresa</label>
                    <input type="text" id="empresa" name="empresa" value={empresa}
                        placeholder="Ingresar Empresa" onChange={actualizarDatos} />

                    <label htmlFor="area">Area</label>
                    <input type="text" id="area" name="area"
                        placeholder="Ingresar area" value={area} onChange={actualizarDatos} />

                    <label htmlFor="resumen">Resumen</label>
                    <input type="text" id="resumen" name="resumen" value={resumen}
                        placeholder="desde dd/mm/yyyy hasta dd/mm/yyyy o actualidad"
                        onChange={actualizarDatos} />

                    {/*ACA ES EL TEMA del array*/}

                    <label htmlFor="finicio">Fecha inicio</label>
                    <input type="date" id="finicio" name="finicio"
                        placeholder="Ingresar telefono fijo y/o celular" value={finicio} onChange={actualizarDatos} />

                    <label htmlFor="imagen">Seleccionar imagen</label>
                    <input type="text" id="imagen" name="imagen"
                        placeholder="imagen" value={imagen} onChange={actualizarDatos} />

                    <label htmlFor="">Tareas</label>
                    <ListadoItems items={tareas} metodo={actualizarTareas} />

                    <input className={`btnSubmit ${loading && `uploading`} ${error && `uploadingError`}`} type="submit" value={loading ? "Uploading..." : (error ? "Error..." : "submit")} />
                </form>}
        </>
    )
}