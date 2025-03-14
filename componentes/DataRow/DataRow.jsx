import { useEffect, useState } from 'react'
import { InterFormExperiencia } from '../../componentes/FormulariosInternos/Experiencia/InterFormExperiencia'
import { db } from '../../FireBase/FireBaseReturnData'
import { doc, deleteDoc } from 'firebase/firestore'
import './DataRow.css'
export const DataRow = ({ obj, nombre }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    
    const [show, setShow] = useState(false)
    const id = obj.Id

    const editar = () => {
        setShow(!show)
    }

    useEffect(() => {
    }, [])

    const borrarDato = async (e) => {
        e.preventDefault()
        var status = confirm(`seguro que quieres borrar este documento ${id}?`)
        alert(status)
        if (status === true) {
            setLoading(true)
            try {
                await deleteDoc(doc(db, "Experiencia", id))
                setExperienciaContext('')
                mostrarModal("Dato eliminado correctamente, refrescar la pagina para ver la actualizacion de estos datos", 0)
            } catch (error) {
                mostrarModal("Ha ocurrido un error, refrescar la pagina para ver la actualizacion de estos datos", 3)
                setError(error)
            } finally {
                setLoading(false)
            }
        }
    }


        return (
            <div className="generalDisplay">
                <div className="dataRowConteiner">
                    <div className="dataRowInfo">{nombre}</div>
                    <div className="dataRowButtons">
                        <button onClick={editar}><i className="fa-solid fa-pen-to-square"></i></button>
                        <button onClick={borrarDato}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
                <div className={`${show ? 'displayFormStatus show' : 'displayFormStatus'}`}>
                    <hr />
                    <InterFormExperiencia objeto={obj} tipo={true} />
                </div>
            </div>
        )
    }