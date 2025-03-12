import '../../Formularios/FormStyles.css'
import { useEffect, useState } from 'react'
import { ListadoItems } from '../../ListadoItems/ListadoItems'

export const InterFormExperiencia = ({ objeto }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { Id, Area, Empresa, Imagen, Resumen, Tareas, fInicio } = objeto

    const [itemTarea, setItemTarea] = useState(Tareas)

    const actualizarTareas = (newTareas)=>{
        setItemTarea(newTareas)
    }

    useEffect(()=>{
        console.log()
    },[])

    //metodo del formulario
    const [inputForm, setInputForm] = useState(objeto ? {
        id: Id,
        area: Area,
        empresa: Empresa,
        imagen: Imagen,
        resumen: Resumen,
        tareas: Tareas,
        finicio: new Date()

    } : {
        id: '',
        area: '',
        empresa: '',
        imagen: '',
        resumen: '',
        tareas: [],
        finicio: new Date()

    })

    const { area, empresa, imagen, resumen, tareas, finicio, id } = inputForm


    const actualizarDatos = ({ target }) => {
        const { name, value, type, checked } = target
        setInputForm({
            ...inputForm, [name]: type === 'checkbox' ? (checked ? "Activa" : "No activa") : value
        })
    }

    const inputTareas = ()=>{
        setInputForm({...inputForm,tareas:itemTarea})
    }

    const enviarDatos = (e)=>{
        e.preventDefault()
        inputTareas()
    }

    return (
        <>
            <form onSubmit={enviarDatos} className="formEditData">
                <h3>Id documento: {id}</h3>
                <label htmlFor="empresa">Empresa</label>
                <input type="text" id="empresa" name="empresa" value={empresa} placeholder="Ingresar Empresa" onChange={actualizarDatos} />

                <label htmlFor="area">Fecha de nacimiento</label>
                <input type="text" id="area" name="area" placeholder="Ingresar area" value={area} onChange={actualizarDatos} />

                <label htmlFor="resumen">Estado</label>
                <input type="text" id="resumen" name="resumen" placeholder="resumen" value={resumen} onChange={actualizarDatos} />

                {/*ACA ES EL TEMA del array*/}

                <label htmlFor="fInicio">Fecha inicio</label>
                <input type="date" id="fInicio" name="fInicio" placeholder="Ingresar telefono fijo y/o celular" value={finicio} onChange={actualizarDatos} />

                <label htmlFor="imagen">Seleccionar imagen</label>
                <input type="text" id="imagen" name="imagen" placeholder="imagen" value={imagen} onChange={actualizarDatos} />


                <input type="file" id="imagen" name="imagen" placeholder="Seleccionar imagen" value={''} onChange={() => { }} />

                <label htmlFor="">Tareas</label>
                <ListadoItems items={itemTarea} metodo={actualizarTareas} />

                <input className={`btnSubmit ${loading && `uploading`} ${error && `uploadingError`}`} type="submit" value={loading ? "Uploading..." : (error ? "Error..." : "submit")} />
            </form></>
    )
}