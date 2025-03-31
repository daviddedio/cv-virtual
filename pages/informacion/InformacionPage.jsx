import { GeneralTable, GeneralTableSkeleton } from "../../componentes/Table/GeneralTable"
import { useState, useEffect, useContext } from "react";
import { getSomeDataFromFirebase } from '../../FireBase/FireBaseReturnData'
import { Context } from '../../context/Context'
import { CardPresentation, CardPresentationSkeleton } from "../../componentes/CardPresentation/CardPresentation";

import "./InformacionPage.css"

export const InformacionPage = () => {
    //datos
    const [dataInfo, setDataInfo] = useState({})
    const [dataLocalizacion, setDataLocalizacion] = useState({})
    const [dataRedes, setDataRedes] = useState({})

    //estados
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { informacion, infoContextContacto, setInfoContextContacto, infoContextInicial, setInfoContextInicial, infoContextRedes, setInfoContextRedes } = useContext(Context)

    const getDataFromFirebase = async () => {
        if (informacion) {
            setDataInfo(informacion)
            console.log('info cargada desde context')
            return
        }

        setLoading(true)
        try {
            const datos = await getSomeDataFromFirebase('InfoPersonal')
            setDataInfo(datos[1])
            setDataLocalizacion(datos[0])
            setInfoContextContacto(datos[0])
            setInfoContextInicial(datos[1])
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
                {
                    loading ?
                        <>
                            <CardPresentationSkeleton/>
                        </>
                        :
                        <>
                            <CardPresentation nombre={dataInfo["Nombre"]} nacionalidad={dataInfo["Nacionalidad"]} licencia={dataInfo["Licencia de conducir"]} fecha={dataInfo["Fecha Nacimiento"]} estado={dataInfo["Estado Civil"]} presentacion={dataInfo["Presentacion"]} domicilio={dataLocalizacion["Domicilio"]} telefono={dataLocalizacion["Telefono"]} correo={dataLocalizacion["Email"]} />
                        </>
                }
                <hr />
            </div>
        </div>
    )
}