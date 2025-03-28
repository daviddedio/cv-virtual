import { ExpCard, ExpCardSkeleton } from '../../componentes/ExpCard/ExpCard'
import { useState, useEffect, useContext } from "react";
import { getSomeDataFromFirebase } from '../../FireBase/FireBaseReturnData'
import {Context} from '../../context/Context'
import { settear } from '../../Utilidades/Utilidades';

export const ExperienciaPage = () => {
    const [experiencia, setExperiencia] = useState([])

    //estados
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {experienciaContext, setExperienciaContext} = useContext(Context)

    const getDataFromFirebase = async () => {
        if (experienciaContext){
            settear([setExperiencia], experienciaContext)
            return
        }
        setLoading(true)
        try {
            const datos = await getSomeDataFromFirebase("Experiencia")
            settear([setData, setExperiencia, setExperienciaContext], datos.sort((a,b) => b.fInicio.seconds - a.fInicio.seconds ))
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataFromFirebase()
    }, [])

    if(error){
        return <p>Error</p>
    }

    return (
        <div key={"divConteiner"}>
            {   loading ?
                Array.from({ length: 6 }).map((it, index) =>
                    <ExpCardSkeleton clave={`key${index.toString()}`} key={index.toString()}/>
                    )
                :
                experiencia.map(exp =><ExpCard 
                    Empresa={exp.Empresa} 
                    Area={exp.Area}
                    Resumen={exp.Resumen}
                    Tareas={exp.Tareas}
                    Imagen={exp.Imagen}
                    key={exp.fInicio.seconds}
                    place={exp.id}
                />)
            }
        </div>
    )
}