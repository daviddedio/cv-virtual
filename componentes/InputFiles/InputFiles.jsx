import { useState } from "react"
import { storage } from "../../FireBase/FireBaseReturnData"
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
import './InputFiles.css'

export const InputFiles = () => {
    const [loading, setLoading] = useState(false)
    const [fileName, setFileName] = useState('https://firebasestorage.googleapis.com/v0/b/cvelectronicodediodavid.appspot.com/o/NoImagen.jpg?alt=media&token=842221fd-400f-4938-b99d-370eea0826da')

    const uploadFile = async (file) => {
        if (!file) { return }
        const nombre = file.name
        const storageRef = ref(storage, nombre)
        try {
            await uploadBytes(storageRef, file)
            const url = await getDownloadURL(storageRef)
            setFileName(url)
        } catch (error) {

        } finally {

        }
    }

    const uploadImg = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={uploadImg} className="uploadForm">
            <input type="file" name="" id="" onChange={e => uploadFile(e.target.files[0])} />
            <button className="btnSubmit">Subir</button>
            <div className="imgMuestraConteiner">
                <input type="image" src={fileName} alt="" />
            </div>
            <label htmlFor="file">Ruta de la imagen</label>
            <input type="text" name="file" id="file" value={fileName} readOnly />
        </form>
    )
}