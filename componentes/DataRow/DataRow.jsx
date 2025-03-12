import { useEffect, useState } from 'react'
import { InterFormExperiencia } from '../../componentes/FormulariosInternos/Experiencia/InterFormExperiencia'
import './DataRow.css'
export const DataRow = ({ obj, nombre }) => {

    const [show, setShow] = useState(false)
    
    const editar = ()=>{
        setShow(!show)
    }

    const eliminar = ()=>{
        alert(obj.id)
    }

    useEffect(()=>{
    },[])

    
    return (
        <div className="generalDisplay">
            <div className="dataRowConteiner">
                <div className="dataRowInfo">{nombre}</div>
                <div className="dataRowButtons">
                    <button onClick={editar}><i className="fa-solid fa-eraser"></i></button>
                    <button onClick={eliminar}><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
            <div className={`${show ? 'displayFormStatus show' : 'displayFormStatus'}`}>
                <hr />
                <InterFormExperiencia  objeto={obj}/>
            </div>
        </div>
    )
}