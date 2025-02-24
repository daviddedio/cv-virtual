import './CursoItem.css'

export const CursoItem = ({ nombre, comentarios, informacion, clase }) => {
    return (
        <div className={clase}>
            <div className="datosConteinerCurso">
                <h2>{nombre}</h2>
                <p className='firstPharagraf'>Realizado el: {informacion}</p>
                <p className='secondPharagraf'>{comentarios}</p>
            </div>
            <div className="botonConteinerCurso">
                <button onClick={()=>{alert("hola")}}><i className="fa-solid fa-award"></i></button>
            </div>
        </div>

    )
}