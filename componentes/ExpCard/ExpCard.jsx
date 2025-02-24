
import { useState } from 'react'
import './ExpCard.css'

export const ExpCard = ({ Empresa, Area, Resumen, Tareas, Imagen }) => {
    var unikey = 1

    const [toggle, setToggle] = useState('accordion')
    const [style, setStyle] = useState('panel')

    const toggleButtonChange = ()=>{
        if (toggle === 'accordion'){
            setStyle('panel longer')
            setToggle('accordion activ')
        }else{
            setStyle('panel')
            setToggle('accordion')
        }
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
            <button className={toggle} onClick={toggleButtonChange}><i className="fa-solid fa-arrow-right" /> Click Aqui para ver responsabilidades</button>
                <ul className={style}>
                    {Tareas.map(
                        t => <li key={unikey++} className='itemList'>{t.Tarea}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}