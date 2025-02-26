import { useModalContext } from '../modal/context/ModalContext'
import './CursoItem.css'

export const CursoItem = ({ nombre, comentarios, informacion, clase, imagen }) => {
    const {setState, setImagen} = useModalContext()

    const mostarModal = (img) =>{
        setImagen(img)
        setState(true)
    }

    return (
        <div className={clase}>
            <div className="datosConteinerCurso">
                <h2>{nombre}</h2>
                <p className='firstPharagraf'>Realizado el: {informacion}</p>
                <p className='secondPharagraf'>{comentarios}</p>
            </div>
            <div className="botonConteinerCurso">
                <button onClick={()=>mostarModal({imagen})}><i className="fa-solid fa-award"></i></button>
            </div>
        </div>

    )
}