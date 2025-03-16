import { useContext, useEffect, useState } from 'react'
import { InterFormExperiencia } from '../../componentes/FormulariosInternos/Experiencia/InterFormExperiencia'
import { db } from '../../FireBase/FireBaseReturnData'
import { doc, deleteDoc } from 'firebase/firestore'
import { Context } from '../../context/Context'
import { useModalContext } from '../modal/context/ModalContext'
import { CustomAlert } from '../Alerta/CustomAlert'
import './DataRow.css'
export const DataRow = ({ obj, nombre}) => {

    const { setExperienciaContext } = useContext(Context)
    const { setComponente, setState } = useModalContext()

    const [loading, setLoading] = useState(false)
    const [eliminado, setEliminado] = useState(false)
    const [error, setError] = useState('')

    const [show, setShow] = useState(false)
    const id = obj.Id

    const editar = () => {
        setShow(!show)
    }

    useEffect(() => {
    }, [])

    const mostrarModal = (mensaje, type) => {
        setComponente(<CustomAlert mensaje={mensaje} ntype={type} />)
        setState(true)
    }

    const borrarDato = async (e) => {
        e.preventDefault()
        var status = confirm(`seguro que quieres borrar este documento ${id} - ${nombre}?`)
        if (status === true) {
            setLoading(true)
            try {
                await deleteDoc(doc(db, "Experiencia", id))
                setExperienciaContext('')
                mostrarModal("Dato eliminado correctamente, refrescar la pagina para ver la actualizacion de estos datos", 0)
            } catch (error) {
                mostrarModal("Ha ocurrido un error, refrescar la pagina para ver la actualizacion de estos datos", 3)
                setError(error)
            }finally{
                setEliminado(true)
            }
        }
    }


    return (
        <div className="generalDisplay">
            <div className="dataRowConteiner">
                {
                    loading ? <h2 className={`eliminarExperiencia ${eliminado && 'colorRedExp'}`}>{eliminado ? "Item Eliminado" : "Eliminando..."}</h2> :
                        <>
                            <div className="dataRowInfo">{nombre}</div>
                            <div className="dataRowButtons">
                                <button onClick={editar}><i className="fa-solid fa-pen-to-square"></i></button>
                                <button onClick={borrarDato}><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </>
                }

            </div>
            <div className={`${show ? 'displayFormStatus show' : 'displayFormStatus'}`}>
                <hr />
                <InterFormExperiencia objeto={obj} tipo={true} />
            </div>
        </div>
    )
}