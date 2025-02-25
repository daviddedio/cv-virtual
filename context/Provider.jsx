import { Context } from './Context'
import { useState, useEffect } from 'react'

export const Provider = ({children}) => {

    const [conocimientos, setConocimientos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [item, setItem] = useState([])

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
        <Context.Provider value={{conocimientos:[conocimientos, setConocimientos], categorias:[categorias, setCategorias], items:[item, setItem]}}>
            {children}
        </Context.Provider>
    )
}