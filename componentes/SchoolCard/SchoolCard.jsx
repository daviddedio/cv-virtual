import './SchoolCard.css'

export const SchoolCard = ({Nombre, Universidad, info, Imagen}) => {
    return( 
        <div className="schoolCard"> 
            <div className='SCimgConteiner'>
                <img src={Imagen} alt={Imagen} />
            </div>
            <div className='SCdataConteiner'>
                <h2>{Nombre}</h2>
                <h3><i className="fa-solid fa-building-columns"/>  {Universidad}</h3>
                <p><i className="fa-regular fa-calendar-days"/> {info}</p>
            </div>
        </div>
    )
}