import { useState, useContext } from "react"
import { storage } from "../../FireBase/FireBaseReturnData"
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
import { useModalContext } from "../modal/context/ModalContext"
import { CustomAlert } from "../Alerta/CustomAlert"
import './InputFiles.css'

export const InputFiles = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { setComponente, setState } = useModalContext()
    const [fileName, setFileName] = useState('https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/NoImagen.jpg?alt=media&token=842221fd-400f-4938-b99d-370eea0826da')
    const [file, setFile] = useState(null)

    const uploadFile = async () => {
        if (!file) { 
            mostrarModal(`No hay un archivo seleccionado`, 2)
            return 
        }
        const storageRef = ref(storage, fileName)
        try {
            setLoading(true)
            await uploadBytes(storageRef, file)
            const url = await getDownloadURL(storageRef)
            setFileName(url)
            mostrarModal("Imagen cargada correctamente", 0)
        } catch (error) {
            mostrarModal(`Ha ocurrido un error (${error.message})`, 3)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const uploadImg = (e) => {
        e.preventDefault()
        uploadFile()
    }

    const mostrarModal = (mensaje, type) => {
        setComponente(<CustomAlert mensaje={mensaje} ntype={type} />)
        setState(true)
    }

    return (
        <form onSubmit={uploadImg} className="uploadForm">
            <input
                type="file"
                name=""
                id=""
                onChange={e => setFile(e.target.files[0])} />
            <input
                className={`btnSubmit ${loading && `uploading`} ${error && `uploadingError`}`}
                type="submit"
                value={loading ? "Uploading..." : (error ? "Error..." : "submit")} />
            <div className="imgMuestraConteiner">
                <img src={loading ? '../../src/assets/circleSpinnWhite.svg' : fileName} alt="" />
            </div>
            <label htmlFor="file">Ruta de la imagen</label>
            <span> - (Copiar y pegar direccion debajo)</span>
            <input type="text" name="file" id="file" value={fileName} readOnly />
        </form>
    )
}