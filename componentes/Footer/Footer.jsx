import { useState, useEffect, useContext } from "react"
import { getSomeDataFromFirebase } from "../../FireBase/FireBaseReturnData"
import { Context } from "../../context/Context"
import "./Footer.css"
export const Footer = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [array, setDatos] = useState('')
    const { infoContextRedes, setInfoContextRedes } = useContext(Context)

    const getDataFromFirebase = async () => {
        if (infoContextRedes) {
            setInfoContextRedes(infoContextRedes)
            return
        }

        setLoading(true)
        try {
            const datos = await getSomeDataFromFirebase('InfoPersonal')
            setDatos(datos[2])
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getDataFromFirebase()
    }, [])

    return (
        <div className="footer-img">
            <h3>Redes</h3>
            <ul>
                {loading ? "cargando" :
                    <>
                        <li>Linkedin: <a href={array["Linkedin"]}>Linkedin</a></li>
                        <li>GitHub: <a href={array["GitHub"]}>GitHub</a></li>
                    </>
                }
            </ul>
        </div>
    )
}