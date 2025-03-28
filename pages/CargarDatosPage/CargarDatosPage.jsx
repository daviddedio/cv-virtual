import { useEffect, useState } from 'react'
import {FormInformacion} from '../../componentes/Formularios/FormInformacion'
import {FormConocimiento} from '../../componentes/Formularios/FormConocimiento'
import {FormCursos} from '../../componentes/Formularios/FormCursos'
import {FormEstudios} from "../../componentes/Formularios/FormEstudios"
import {FormExperiencia} from '../../componentes/Formularios/FormExperiencia'
import { FormUploadImage } from '../../componentes/Formularios/FormUploadImage'
import './CargarDatosPage.css'

export const CargarDatosPage = () => {

    const [informacion, setInformacion] = useState('')
    const [estudios, setEstudios] = useState('')
    const [experiencia, setExperiencia] = useState('')
    const [curso, setCurso] = useState('')
    const [conocimiento, setConocimiento] = useState('')
    const [loadImg, setLoadImg] = useState('')

    const Activar = (Opcion)=>{
        Opcion === "informacion" ? setInformacion(['active','block']) : setInformacion('')
        Opcion === "estudios" ? setEstudios(['active','block']) : setEstudios('')
        Opcion === "experiencia" ? setExperiencia(['active','block']) : setExperiencia('')
        Opcion === "curso" ? setCurso(['active','block']) : setCurso('')
        Opcion === "conocimiento" ? setConocimiento(['active','block']) : setConocimiento('')
        Opcion === "loadImg" ? setLoadImg(['active','block']) : setLoadImg('')
    }

    useEffect(()=>{
        Activar('informacion')
    },[])

    return (
        <>
            <h2>Seleccionar Menú</h2>

            <div className="tab">
                <button className={`tablinks ${informacion[0]}`} onClick={()=>Activar('informacion')}>Informacion</button>
                <button className={`tablinks ${estudios[0]}`} onClick={()=>Activar('estudios')}>Estudios</button>
                <button className={`tablinks ${experiencia[0]}`} onClick={()=>Activar('experiencia')}>Experiencia</button>
                <button className={`tablinks ${curso[0]}`} onClick={()=>Activar('curso')}>Curso</button>
                <button className={`tablinks ${conocimiento[0]}`} onClick={()=>Activar('conocimiento')}>Conocimiento</button>
                <button className={`tablinks ${loadImg[0]}`} onClick={()=>Activar('loadImg')}>Subir Imagen</button>
            </div>

            <div id="Informacion" className={`tabcontent ${informacion[1]}`}>
                <FormInformacion/>
            </div>

            <div id="Estudios" className={`tabcontent ${estudios[1]}`}>
                <FormEstudios/>
            </div>

            <div id="Experiencia" className={`tabcontent ${experiencia[1]}`}>
                <FormExperiencia />
            </div>

            <div id="Curso" className={`tabcontent ${curso[1]}`}>
                <FormCursos/>
            </div>

            <div id="Conocimiento" className={`tabcontent ${conocimiento[1]}`}>
                <FormConocimiento/>
            </div>

            <div id="loadImg" className={`tabcontent ${loadImg[1]}`}>
                <FormUploadImage/>
            </div>
        </>
    )
}