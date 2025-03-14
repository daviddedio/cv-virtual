import { useEffect, useRef, useState } from "react"
import './ListadoItems.css'
export const ListadoItems = ({items, metodo}) => {
    const [itemTarea, setItemTarea] = useState(items)
    const form = useRef()
    
    const quitarItem = (index)=>{
        const temp = itemTarea.filter(i=>i.Tarea != index)
        metodo(temp)
        setItemTarea(temp)
    }

    const agregarItem = (e)=>{
        e.preventDefault()
        const temp = [...itemTarea, newTareasForm]
        setNewTareasForm({Cat:'', Tarea:''})
        metodo(temp)
        setItemTarea(temp) 
    }

    useEffect(()=>{

    },[itemTarea])

    const [newTareasForm, setNewTareasForm] = useState({
        Cat:'', Tarea:''
    })

    const {Cat, Tarea} = newTareasForm

    const newAdd = ({target})=>{
        const {value, name} = target
        setNewTareasForm({...newTareasForm, [name]:value} )
    }

    return (
        <>
        <div className="inputNewTarea">
            <label htmlFor="Tarea">Nueva tarea</label>
            <input type="text" name="Tarea" id="Tarea" value={Tarea} onChange={newAdd} placeholder="Indicar tarea"/>
            <label htmlFor="Cat" style={{marginLeft:10 + 'px'}}>Nueva tarea</label>
            <input type="text" name="Cat" id="Cat" value={Cat} onChange={newAdd} placeholder="Categorias A, B o C"/>
            <button onClick={agregarItem}><i className="fa-solid fa-square-plus"></i></button>
        </div>
        <hr />
        <ul className="este">
            {itemTarea.map((it, index) => <li key={index}><button onClick={() => quitarItem(it.Tarea)}><i className="fa-solid fa-eraser"></i></button> - {`${it.Cat} - ${it.Tarea}`} </li>)}
        </ul>
        </>
    )
}