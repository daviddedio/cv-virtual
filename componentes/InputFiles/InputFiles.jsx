import { useState, useContext } from "react"
import { useModalContext } from "../modal/context/ModalContext"
import { CustomAlert } from "../Alerta/CustomAlert"
import { uploadFileToStorage } from "../../FireBase/FireBaseReturnData"
import './InputFiles.css'

export const InputFiles = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { setComponente, setState } = useModalContext()
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState(null)

    const uploadFile = async () => {
        if (!file) { 
            mostrarModal(`No hay un archivo seleccionado`, 2)
            return 
        }
        try {
            setLoading(true)
            const url = await uploadFileToStorage(file, file.name)
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

    const setFileAndFileName = (e)=>{
        setFile(e.target.files[0])
    }

    return (
        <form onSubmit={uploadImg} className="uploadForm">
            <input
                type="file"
                name=""
                id=""
                onChange={setFileAndFileName} />
            <input
                className={`btnSubmit ${loading && `uploading`} ${error && `uploadingError`}`}
                type="submit"
                value={loading ? "Uploading..." : (error ? "Error..." : "submit")} />
            <div className="imgMuestraConteiner">
                <img src={loading ? '../../src/assets/circleSpinnWhite.svg' : fileName} alt="" />
            </div>
            <label htmlFor="file">Ruta de la imagen</label>
            <span> - (Copiar y pegar direccion debajo)</span>
            <input type="text" name="file" id="inputFilesfile" value={fileName} readOnly />
        </form>
    )
}