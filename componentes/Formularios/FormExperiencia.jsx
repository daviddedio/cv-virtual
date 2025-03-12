import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseReturnData'
import { Context } from '../../context/Context'
import { DataRow } from "../DataRow/DataRow";

export const FormExperiencia = () => {

    const [experiencia, setExperiencia] = useState([])

    //estados
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //datos del contexto
    const { experienciaContext, setExperienciaContext } = useContext(Context)

    //obtener datos
    const getDataFromFirebase = async () => {
        if (experienciaContext) {
            setExperiencia(experienciaContext)
            return
        }
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "Experiencia"));
            const data = querySnapshot.docs.map(doc => Object.assign({ Id: doc.id }, doc.data()))
            setData(data.sort((a, b) => b.fInicio.seconds - a.fInicio.seconds))
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

    var nro = 1

    return (
        <>
            <div className="formHeader">
                <h2>Actualizar Informacion General, contacto y redes</h2>
            </div>
            <hr />
            {
                loading ? <p>Cargando</p> : experiencia.map(exp=><DataRow obj={exp} nombre={exp.Empresa} key={nro++}/>)
            }
        </>
    )
}
