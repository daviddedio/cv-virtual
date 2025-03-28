import { useState, useEffect, useContext } from "react";
import { Context } from '../../context/Context'
import { DataRow } from "../DataRow/DataRow"
import { InterFormExperiencia } from "../FormulariosInternos/Experiencia/InterFormExperiencia";
import { getSomeDataFromFirebase,updateDocument } from "../../FireBase/FireBaseReturnData";
import { settear } from "../../Utilidades/Utilidades";

export const FormExperiencia = () => {

    const [experiencia, setExperiencia] = useState([])

    //estados
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [btnToggle, setBtnToggle] = useState(['btnToggleActive', 'btnToggle'])
    const [newDataForm, setNewDataForm] = useState(true)

    const switchToggle = ()=>{
        if(btnToggle[0] == 'btnToggleActive'){
            setBtnToggle(['btnToggle', 'btnToggleActive'])
            setNewDataForm(false)
        }else{
            setBtnToggle(['btnToggleActive', 'btnToggle'])
            setNewDataForm(true)
        }
    }
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
            const datos = await getSomeDataFromFirebase("Experiencia")
            settear([setData,setExperiencia, setExperienciaContext],datos)
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
                <h2>Actualizar Informacion de experiencias laborales</h2>
            </div>
            <hr />
            <button className={`${btnToggle[0]}`} onClick={switchToggle}><i className="fa-solid fa-file-pen"></i>NewDoc</button>
            <button className={`${btnToggle[1]}`} onClick={switchToggle}><i className="fa-solid fa-pen-to-square"></i> UpDate</button>
            <hr/>
            {
                newDataForm ? <InterFormExperiencia objeto={{}} tipo={false}/> :
                (loading ? <p>Cargando</p> : experiencia.map(exp=><DataRow obj={exp} nombre={exp.Empresa} resetFunction={getDataFromFirebase} key={nro++}/>))
            }
        </>
    )
}
