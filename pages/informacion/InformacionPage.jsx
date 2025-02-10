import { GeneralTable } from "../../componentes/Table/GeneralTable"
import "./InformacionPage.css"

export const InformacionPage = () => {

    const dataInfo = {
        "nombre": "David Emanuel De Dio",
        "edad": "39",
        "estado civil": "Casado",
        "nacionalidad": "Argentino",
        "lic de conducir": "Activa"
    }

    const dataLocalizacion = {
        "domicilio": "Gobernador Candiotti 1307",
        "teléfono": "3462 545399",
        "correo": "ddedio@gmail.com"
    }

    const dataRedes = {
        "linkedin": "www.linkedin.com",
        'github': "www.gitHub.com"
    }

    return (
        <div className="infoConteiner">
            <div className="AllTableContainer">
                <div className="imgConteiner">
                    <img className="imgPhoto" src="https://media.licdn.com/dms/image/v2/C4D03AQE_LBZZGaTIjw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1524490233489?e=1744848000&v=beta&t=HBLUMzvA70WgAOHynJDLNEM5Pv3-rgJvQ7xnKrHAR4w" alt="" />
                </div>
                <GeneralTable data={dataInfo} title="Informacion General" />
                <GeneralTable data={dataLocalizacion} title={"Informacion de contacto"} />
                <GeneralTable data={dataRedes} title={"Redes"} />
            </div>
        </div>
    )
}