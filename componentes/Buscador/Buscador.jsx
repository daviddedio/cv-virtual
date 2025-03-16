import { useEffect, useState } from "react";
import './Buscador.css'

export const Buscador = ({ cat, filtro }) => {

    const [categorias, setCategorias] = useState([])

    const filtrarPadre = (dato) => {
        filtro(dato)
    }

    useEffect(() => {
        setCategorias(cat)
        //cargarCategorias(cat)
    }, [cat])
    

    return (
        <div className="buscadorGeneral">
            <div className="seleccionGeneral">
                <label htmlFor="buscador">Seleccionar categoria:</label>
                <select name="buscador" id="buscador" onChange={(e) => { filtrarPadre(e.target.value) }}>
                    <option value="todo">...</option>
                    {
                        categorias.map((itm) =>
                            <option value={itm} key={itm}>{itm}</option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}

export const BuscadorSkeleton = () => {
    return( 
        <div className="buscadorGeneral skeleton skeleton-box ">
            <div className="seleccionGeneral skeleton skeleton-box">
                <label htmlFor="buscadorSkeleton skeleton skeleton-box">Seleccionar categoria:</label>
                <select name="buscadorSkeleton" id="buscadorSkeleton" className="skeleton-box skeleton">
                    <option value="todo">...</option>
                </select>
            </div>
        </div>
    )
}