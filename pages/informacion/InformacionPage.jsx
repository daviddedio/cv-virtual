import { GeneralTable } from "../../componentes/Table/GeneralTable"
import { GeneralTableSkeleton } from "../../componentes/Table/GeneralTableSkeleton";
import { useState, useRef, useEffect, useContext } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseReturnData'
import {Context} from '../../context/Context'
import "./InformacionPage.css"

export const InformacionPage = () => {
    //datos
    const [dataInfo, setDataInfo] = useState({})
    const [dataLocalizacion, setDataLocalizacion] = useState({})
    const [dataRedes, setDataRedes] = useState({})

    //estados
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchedRef = useRef(false); // Controla si ya se hizo la petición

    const {informacion} = useContext(Context)

    const getDataFromFirebase = async () => {
        if(informacion){
            setDataInfo(informacion)
            console.log('info cargada desde context')
            return
        }
        
        setLoading(true)

        try {
            const querySnapshot = await getDocs(collection(db, "InfoPersonal"));
            const data = querySnapshot.docs.map(doc => doc.data())
            setData(data)
            setDataInfo(data[1])
            setDataLocalizacion(data[0])
            setDataRedes(data[2])
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataFromFirebase()
    }, [])

    if (error) {
        return <p>Error</p>
    }

    return (
        <div className="infoConteiner">
            <div className="AllTableContainer">
                <div className="imgConteiner">
                    <img className="imgPhoto" src="https://media.licdn.com/dms/image/v2/C4D03AQE_LBZZGaTIjw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1524490233489?e=1744848000&v=beta&t=HBLUMzvA70WgAOHynJDLNEM5Pv3-rgJvQ7xnKrHAR4w" alt="" />
                </div>
                {
                    loading ?
                    <>
                    <GeneralTableSkeleton title={"Informacion General"} count={5}/>
                    <GeneralTableSkeleton title={"Informacion de contacto"} count={3}/>
                    <GeneralTableSkeleton title={"Redes"} count={2}/>
                    </>
                    :
                    <>
                    <GeneralTable data={dataInfo} title={"Informacion General"} />
                    <GeneralTable data={dataLocalizacion} title={"Informacion de contacto"} />
                    <GeneralTable data={dataRedes} title={"Redes"} />
                    </>
                }
                <hr />
                {/*<h2>Imagenes</h2>
                <div className="IPimageConteiner">
                    <img src="https://scontent.fros6-1.fna.fbcdn.net/v/t1.6435-9/65370959_10218963631790757_6405998598781140992_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpNN5xuWgHsXJQ2HPjHQqIhLM5ESujdn-EszkRK6N2f7af-gnQiQsGXi1Y7j-reEM&_nc_ohc=gOhDsOSSNVAQ7kNvgGxUUhY&_nc_zt=23&_nc_ht=scontent.fros6-1.fna&_nc_gid=Al_WterBDIfQhXnea7QexEV&oh=00_AYArlo1THq7DGePz2WPOGIXqx7uB9u0doSpH5ZNah88kXg&oe=67DA0385" alt="" />
                    <img src="https://media.licdn.com/dms/image/v2/D4D22AQFjCtECk4iSmg/feedshare-shrink_800/feedshare-shrink_800/0/1702040901269?e=1742428800&v=beta&t=2_dQDdXBVno3-FZxvnVM4T2RRycz8qDyLBudlHqaOKA" alt="" />
                </div>*/}

            </div>
        </div>
    )
}