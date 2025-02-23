import { GeneralTable } from "../../componentes/Table/GeneralTable"
import { datos, datosPrueba } from '../../FireBase/ReturnDatos'
import { useState, useEffect } from "react"
import "./InformacionPage.css"

export const InformacionPage = () => {

    const [dataInfo, setDataInfo] = useState({})
    const [dataLocalizacion, setDataLocalizacion] = useState({})
    const [dataRedes, setDataRedes] = useState({})

    const cargarInformacion = async () => {
        setDataInfo(datosPrueba[1])
        setDataLocalizacion(datosPrueba[0])
        setDataRedes(datosPrueba[2])
    }

    useEffect(() => {
        cargarInformacion()
    }, [])

    return (
        <div className="infoConteiner">
            <div className="AllTableContainer">
                <div className="imgConteiner">
                    <img className="imgPhoto" src="https://media.licdn.com/dms/image/v2/C4D03AQE_LBZZGaTIjw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1524490233489?e=1744848000&v=beta&t=HBLUMzvA70WgAOHynJDLNEM5Pv3-rgJvQ7xnKrHAR4w" alt="" />
                </div>
                <GeneralTable data={dataInfo} title="Informacion General" />
                <GeneralTable data={dataLocalizacion} title={"Informacion de contacto"} />
                <GeneralTable data={dataRedes} title={"Redes"} />
                <hr />
                <h2>Imagenes</h2>
                <div className="IPimageConteiner">
                    <img src="https://scontent.fros6-1.fna.fbcdn.net/v/t1.6435-9/65370959_10218963631790757_6405998598781140992_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGpNN5xuWgHsXJQ2HPjHQqIhLM5ESujdn-EszkRK6N2f7af-gnQiQsGXi1Y7j-reEM&_nc_ohc=gOhDsOSSNVAQ7kNvgGxUUhY&_nc_zt=23&_nc_ht=scontent.fros6-1.fna&_nc_gid=Al_WterBDIfQhXnea7QexEV&oh=00_AYArlo1THq7DGePz2WPOGIXqx7uB9u0doSpH5ZNah88kXg&oe=67DA0385" alt="" />
                    <img src="https://media.licdn.com/dms/image/v2/D4D22AQFjCtECk4iSmg/feedshare-shrink_800/feedshare-shrink_800/0/1702040901269?e=1742428800&v=beta&t=2_dQDdXBVno3-FZxvnVM4T2RRycz8qDyLBudlHqaOKA" alt="" />
                </div>

            </div>
        </div>
    )
}