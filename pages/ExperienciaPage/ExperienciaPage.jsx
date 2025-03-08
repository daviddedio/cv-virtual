import { ExpCard, ExpCardSkeleton } from '../../componentes/ExpCard/ExpCard'
import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseReturnData'
import {Context} from '../../context/Context'

export const ExperienciaPage = () => {
    const [experiencia, setExperiencia] = useState([])

    //estados
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {experienciaContext, setExperienciaContext} = useContext(Context)

    const getDataFromFirebase = async () => {
        if (experienciaContext){
            setExperiencia(experienciaContext)
            return
        }
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "Experiencia"));
            const data = querySnapshot.docs.map(doc => Object.assign({id:doc.id},doc.data()))
            setData(data.sort((a,b) => b.fInicio.seconds - a.fInicio.seconds ))
            setExperiencia(data)
            setExperienciaContext(data)
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