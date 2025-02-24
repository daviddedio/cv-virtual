import { useState, useEffect } from 'react'
import { datos, datosPrueba } from '../../FireBase/ReturnExperiencia'
import { ExpCard } from '../../componentes/ExpCard/ExpCard'

export const ExperienciaPage = () => {

    const [experiencia, setExperiencia] = useState([])

    const cargarInformacion = async () => {
        //setEstudios(datosPrueba)
        const temp = datosPrueba.sort((a, b) => b.fInicio.seconds - a.fInicio.seconds)
        setExperiencia(temp)
    }

    useEffect(() => {
        cargarInformacion()
    }, [])


    return (
        <div>
            {
                experiencia.map(exp =><ExpCard 
                    Empresa={exp.Empresa} 
                    Area={exp.Area}
                    Resumen={exp.Resumen}
                    Tareas={exp.Tareas}
                    Imagen={exp.Imagen}
                    key={exp.fInicio.seconds}
                />)
            }
        </div>
    )
}