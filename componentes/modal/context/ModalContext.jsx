import { createContext, useContext, useState } from "react";

export const ModalContext=createContext({state:false, setState:()=>null})

export const ModalProvider = ({children}) => {
    const [state, setState] = useState(false)
    const [imagen, setImagen] = useState('')
    return(<ModalContext.Provider value={{state, setState, imagen, setImagen}}>{children}</ModalContext.Provider>)
}

export const useModalContext = ()=>{
    const context = useContext(ModalContext)
    return context
}