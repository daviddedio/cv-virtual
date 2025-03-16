import { InputFiles } from "../InputFiles/InputFiles"

export const FormUploadImage = () => {
    return (
        <>
            <div className="formHeader">
                <h2>Cargar imagenes</h2>
            </div>
            <hr />
            <InputFiles/>
        </>
    )
}