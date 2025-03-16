
import { useState } from 'react'
import './ExpCard.css'

export const ExpCard = ({ Empresa, Area, Resumen, Tareas, Imagen }) => {
    var unikey = 1
    const tareas = Tareas.sort((a, b) => {
        if (a.Cat < b.Cat) { return -1; }
        if (a.Cat > b.Cat) { return 1; }
        return 0;
    })

    const [toggle, setToggle] = useState(['', ''])

    const toggleButtonChange = () => {
        if (toggle[0] === '') { setToggle(['activ', 'longer']) } else { setToggle(['', '']) }
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
                <button className={`accordion ${toggle[0]}`} onClick={toggleButtonChange} ><i className="fa-solid fa-arrow-right" /> Click Aqui para ver responsabilidades</button>
                <div className={`panel ${toggle[1]}`}>
                    <ul >
                        {tareas.map(
                            t => <li key={unikey++} className='itemList'>{t.Tarea}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const ExpCardSkeleton = ({ clave }) => {
    return (
        <div className="exptCard " key={clave}>
            <div className="expHeader">
                <div className='sECimgConteiner skeleton'>
                    <img className='skeleton-box-img skeleton' src='../../src/assets/circleSpinnWhite.svg' />
                </div>
                <div className='sECdataConteiner skeleton'>
                    <h2 className='skeleton-title skeleton'>Loading...</h2>
                    <h3 className='.skeleton-subtitle skeleton'>Loading...</h3>
                    <p className='skeleton-text skeleton'>Loading...</p>
                </div>
            </div>
            <div className="cardBody">
                <p className=' skeleton-text skeleton'><i className="fa-solid fa-arrow-right" /> Loding...</p>
            </div>
        </div>
    )
}