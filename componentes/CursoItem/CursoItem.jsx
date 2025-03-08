import { useModalContext } from '../modal/context/ModalContext'
import { ImagenComponent } from '../ImagenComponent/ImagenComponent'
import './CursoItem.css'

export const CursoItem = ({ nombre, comentarios, informacion, clase, imagen }) => {
    const {setComponente, setState} = useModalContext()

    const mostarModal = (reactComponent) =>{
        setComponente(reactComponent)
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
                <button onClick={()=>mostarModal(<ImagenComponent imagen={imagen}/>)}><i className="fa-solid fa-award"></i></button>
            </div>
        </div>

    )
}

export const CursoItemSkeleton = ({clase}) => {
    console.log(clase)
    return (
    <div className="cursoConteiner">
        <div className={clase}>Loading...</div>
    </div>
    )
}