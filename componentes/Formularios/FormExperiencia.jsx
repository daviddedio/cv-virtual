import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseReturnData'
import {Context} from '../../context/Context'

export const FormExperiencia = () => {

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

    return( 
        <div> informacion </div>
    )
}
