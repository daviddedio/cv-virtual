import { Context } from './Context'
import { useState } from 'react'

export const Provider = ({children}) => {
    const [informacionContext, setInformacionContext] = useState('')
    
    const [infoContextContacto, setInfoContextContacto] = useState('')
    const [infoContextInicial, setInfoContextInicial] = useState('')
    const [infoContextRedes, setInfoContextRedes] = useState('')
    
    const [experienciaContext, setExperienciaContext] =  useState('')
    const [estudiosContext, setEstudiosContext] = useState('')
    const [cursosContext, setCursosContext] = useState('')
    const [conocimientosContext, setConocimientosContext] = useState('')
    const [login, setLogin] = useState(false)

    return (
        <Context.Provider value={{informacionContext, setInformacionContext, experienciaContext, setExperienciaContext, estudiosContext, setEstudiosContext, cursosContext, setCursosContext, conocimientosContext, setConocimientosContext, login, setLogin, infoContextContacto, setInfoContextContacto, infoContextInicial, setInfoContextInicial, infoContextRedes, setInfoContextRedes}}>
            {children}
        </Context.Provider>
    )
}