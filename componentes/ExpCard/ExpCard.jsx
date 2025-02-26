
import { useState } from 'react'
import './ExpCard.css'

export const ExpCard = ({ Empresa, Area, Resumen, Tareas, Imagen }) => {
    var unikey = 1

    const [toggle, setToggle] = useState(['',''])

    const toggleButtonChange = () => {
        if (toggle[0] === '') {setToggle(['activ','longer'])} else {setToggle(['',''])}
    }

    return (
        <div className="exptCard">
            <div className="expHeader">
                <div className='ECimgConteiner'>
                    <img src={Imagen} alt={Imagen} />
                </div>
                <div className='ECdataConteiner'>
                    <h2>{Empresa}</h2>
                    <h3>  {Area}</h3>
                    <p>{Resumen}</p>
                </div>
            </div>
            <div className="cardBody">
                <button className={`accordion ${toggle[0]}`} onClick={toggleButtonChange}><i className="fa-solid fa-arrow-right" /> Click Aqui para ver responsabilidades</button>
                <ul className={`panel ${toggle[1]}`}>
                    {Tareas.map(
                        t => <li key={unikey++} className='itemList'>{t.Tarea}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}