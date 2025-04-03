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
        <div className="footer-img footer">
            <h3>Redes y descarga de CV</h3>
            <ul className="footerList">
                {loading ? "cargando" :
                    <>
                        <li className="linka"><i className="fa-brands fa-linkedin fa-xl"/> Linkedin: <a href={array["Linkedin"]} target="_blank">Link</a></li>
                        <li className="linka"><i className="fa-brands fa-github fa-xl"/> GitHub: <a href={array["GitHub"]} target="_blank">Link</a></li>
                        <li className="linka"><i className="fa-solid fa-file-arrow-down fa-xl"/> Descarga CV: <a href="David CV.pdf" target="_blank">Link</a></li>
                    </>
                }
            </ul>
        </div>
    )
}