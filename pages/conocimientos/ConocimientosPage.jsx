import { useState, useEffect } from 'react'
import { datosPrueba } from '../../FireBase/ReturnConocimientos'
import { KnowCard } from '../../componentes/KnowCard/KnowCard'
import './ConocimientosPage.css'

export const ConocimientosPage = () => {

    const [conocimientos, setConocimientos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [item, setItem] = useState([])

    var keyItem = 1

    const cargarInformacion = async () => {
        //const temp = datos.sort((a, b) => b.Orden - a.Orden)
        const temp = datosPrueba.sort((a, b) => b.Orden - a.Orden)

        const result = [];
        temp.forEach((item) => {
            if (!result.includes(item.Categoria)) {
                result.push(item.Categoria);
            }
        })
        //console.log(temp)
        setCategorias(result)
        setConocimientos(temp)
        setItem(temp)
    }

    useEffect(() => {
        cargarInformacion()
    }, [])

    function filtrar(dato){
        if (dato==="todo"){
            setItem(conocimientos)
        }else{
            let temp = conocimientos.filter((con)=>con.Categoria===dato)
            setItem(temp)
        }
    }

    return (
        <>
            <div className="buscador">
                <div className="seleccionCategorias">
                    <label htmlFor="Conocimientos">Seleccionar categoria:</label>
                    <select name="Conocimientos" id="Conocimientos" onChange={e=>filtrar(e.target.value)}>
                        <option value="todo">...</option>
                        {
                            categorias.map((item) =>
                                <option value={item} key={item}>{item==="Lenguaje" ? "Lenguajes y Frameworks" : item}</option>
                            )
                        }
                    </select>
                </div>
                <p>{item.length} Selecciones</p>
            </div>
            <div className='informacionConocimiento'>
                        {
                            item ? 
                            item.map(ite=><KnowCard con={ite.Con} nivel={ite.Nivel} info={ite.info} key={keyItem++}/>)
                            : <p>No hay datos seleccionados</p>
                        }
            </div>
        </>
    )
}