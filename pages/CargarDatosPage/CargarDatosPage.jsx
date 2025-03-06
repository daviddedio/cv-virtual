import { useState } from 'react'
import {InformacionForm, EstudiosForm, ExperienciaForm, CursoForm, ConocimientoForm} from '../../componentes/Formularios/Formulario'
import './CargarDatosPage.css'

export const CargarDatosPage = () => {

    const [informacion, setInformacion] = useState('')
    const [estudios, setEstudios] = useState('')
    const [experiencia, setExperiencia] = useState('')
    const [curso, setCurso] = useState('')
    const [conocimiento, setConocimiento] = useState('')

    const Activar = (Opcion)=>{
        Opcion === "informacion" ? setInformacion(['active','block']) : setInformacion('')
        Opcion === "estudios" ? setEstudios(['active','block']) : setEstudios('')
        Opcion === "experiencia" ? setExperiencia(['active','block']) : setExperiencia('')
        Opcion === "curso" ? setCurso(['active','block']) : setCurso('')
        Opcion === "conocimiento" ? setConocimiento(['active','block']) : setConocimiento('')
    }

    return (
        <>
            <h2>Seleccionar Menú</h2>

            <div className="tab">
                <button className={`tablinks ${informacion[0]}`} onClick={()=>Activar('informacion')}>Informacion</button>
                <button className={`tablinks ${estudios[0]}`} onClick={()=>Activar('estudios')}>Estudios</button>
                <button className={`tablinks ${experiencia[0]}`} onClick={()=>Activar('experiencia')}>Experiencia</button>
                <button className={`tablinks ${curso[0]}`} onClick={()=>Activar('curso')}>Curso</button>
                <button className={`tablinks ${conocimiento[0]}`} onClick={()=>Activar('conocimiento')}>Conocimiento</button>
            </div>

            <div id="Informacion" className={`tabcontent ${informacion[1]}`}>
                <h3>Informacion</h3>
                <InformacionForm/>
            </div>

            <div id="Estudios" className={`tabcontent ${estudios[1]}`}>
                <h3>Paris</h3>
                <EstudiosForm/>
            </div>

            <div id="Experiencia" className={`tabcontent ${experiencia[1]}`}>
                <h3>Tokyo</h3>
                <ExperienciaForm />
            </div>

            <div id="Curso" className={`tabcontent ${curso[1]}`}>
                <h3>Curso</h3>
                <CursoForm/>
            </div>

            <div id="Conocimiento" className={`tabcontent ${conocimiento[1]}`}>
                <h3>Conocimiento</h3>
                <ConocimientoForm/>
            </div>
        </>
    )
}