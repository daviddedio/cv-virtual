import { Context } from './Context'
import { useState } from 'react'

export const Provider = ({children}) => {
    const [informacionContext, setInformacionContext] = useState('')
    const [experienciaContext, setExperienciaContext] =  useState('')
    const [estudiosContext, setEstudiosContext] = useState('')
    const [cursosContext, setCursosContext] = useState('')
    const [conocimientosContext, setConocimientosContext] = useState('')

    return (
        <Context.Provider value={{informacionContext, setInformacionContext, experienciaContext, setExperienciaContext, estudiosContext, setEstudiosContext, cursosContext, setCursosContext, conocimientosContext, setConocimientosContext}}>
            {children}
        </Context.Provider>
    )
}