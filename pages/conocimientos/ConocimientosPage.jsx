import { useState, useEffect } from 'react'
import { datos, datosPrueba } from '../../FireBase/ReturnConocimientos'
import './ConocimientosPage.css'

export const ConocimientosPage = () => {

    const [conocimientos, setConocimientos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [item, setItem] = useState('')

    const cargarInformacion = async () => {
        //setEstudios(datosPrueba)
        const temp = datosPrueba.sort((a, b) => b.Orden - a.Orden)

        const result = [];
        temp.forEach((item) => {
            if (!result.includes(item.Categoria)) {
                result.push(item.Categoria);
            }
        })
        setCategorias(result)
        setConocimientos(temp)
    }

    useEffect(() => {
        cargarInformacion()
    }, [])

    function filtrar(dato){
        setItem(dato)
    }

    return (
        <>
            <div className="buscador">
                <div className="seleccionCategorias">
                    <label htmlFor="Conocimientos">Seleccionar categoria:</label>
                    <select name="Conocimientos" id="Conocimientos" onChange={e=>filtrar(e.target.value)}>
                        {
                            categorias.map((item) =>
                                <option value={item} key={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
            </div>
        </>
    )
}