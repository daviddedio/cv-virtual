import { useContext, useEffect, useState } from 'react'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../FireBase/FireBaseReturnData';
import { Context } from '../../context/Context'
import { useModalContext } from '../../componentes/modal/context/ModalContext'
import { CustomAlert } from '../Alerta/CustomAlert';

import './FormStyles.css'

export const FormInformacion = () => {
    const { infoContextContacto, infoContextInicial, infoContextRedes } = useContext(Context)
    const { setComponente, setState } = useModalContext()

    const [inputForm, setInputForm] = useState({
        nombre: infoContextInicial['Nombre'],
        nacimiento: infoContextInicial['Fecha Nacimiento'],
        estado: infoContextInicial['Estado Civil'],
        nacionalidad: infoContextInicial['Nacionalidad'],
        conducir: infoContextInicial['Licencia de conducir'],
        domicilio: infoContextContacto['Domicilio'],
        telefono: infoContextContacto['Telefono'],
        email: infoContextContacto['Email'],
        linkedin: infoContextRedes["Linkedin"],
        github: infoContextRedes['GitHub']
    })

    const { nombre, nacimiento, estado, nacionalidad, conducir, domicilio, telefono, email, linkedin, github } = inputForm

    const actualizarDatos = ({ target }) => {
        const { name, value, type, checked } = target
        /*console.log("Nombre:", name);
        console.log("Tipo:", type);
        console.log("Valor:", value);
        console.log("Checked:", checked);*/

        setInputForm({
            ...inputForm, [name]: type === 'checkbox' ? (checked ? "Activa" : "No activa") : value
        })
    }

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    const cargarDatos = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(loading)
        try {
            await setDoc(doc(db, "InfoPersonal", "Contacto"), {
                Domicilio: domicilio,
                Email: email,
                Telefono: telefono
            })
            await setDoc(doc(db, "InfoPersonal", "Inicial"), {
                ["Estado Civil"]: estado,
                ["Fecha Nacimiento"]: nacimiento,
                ["Licencia de conducir"]: conducir,
                Nacionalidad: nacionalidad,
                Nombre: nombre
            })
            await setDoc(doc(db, "InfoPersonal", "Redes"), {
                GitHub: github,
                Linkedin: linkedin,
            })
            //throw new error
            mostrarModal("Datos cargados correctamente, refrescar la pagina para ver la actualizacion de estos datos", 0)
        } catch (error) {
            mostrarModal("Ha ocurrido un error, refrescar la pagina para ver la actualizacion de estos datos", 3)
            console.log(error)
            setLoading(false)
            setError(error)

        } finally {
            setLoading(false)
        }
    }

    const mostrarModal = (mensaje, type) => {
        setComponente(<CustomAlert mensaje={mensaje} ntype={type} />)
        setState(true)
        console.log("corta")
    }


    return (
        <>
            <div className="formHeader">
                <h2>Actualizar Informacion General, contacto y redes</h2>
            </div>

            <hr />
            <form onSubmit={cargarDatos}>
                <label htmlFor="nombre">Nombre</label>
                <input className="FormInputUpdate" type="text" id="nombre" name="nombre" value={nombre} placeholder="Ingresar Nombre" onChange={actualizarDatos} />

                <label htmlFor="nacimiento">Fecha de nacimiento</label>
                <input className="FormInputUpdate" type="text" id="nacimiento" name="nacimiento" placeholder="Ingresar Fecha de nacimiento toString()" value={nacimiento} onChange={actualizarDatos} />

                <label htmlFor="estado">Estado</label>
                <input className="FormInputUpdate" type="text" id="estado" name="estado" placeholder="Casado - Soltero - Concubinato" value={estado} onChange={actualizarDatos} />

                <label htmlFor="nacionalidad">Nacionalidad</label>
                <input className="FormInputUpdate" type="text" id="nacionalidad" name="nacionalidad" placeholder="Argentino - Chileno - Colombiano - Brasilero ..." value={nacionalidad} onChange={actualizarDatos} />

                <label htmlFor="conducir">Licencia de conducir</label>
                <input className="FormInputUpdateCheck" type="checkbox" id="conducir" name="conducir" checked={conducir === "Activa" ? true : false} onChange={actualizarDatos} />
                <div />

                <label htmlFor="domicilio">Domicilio</label>
                <input className="FormInputUpdate" type="text" id="domicilio" name="domicilio" placeholder="Ingresar calle y nro de domicilio" value={domicilio} onChange={actualizarDatos} />

                <label htmlFor="telefono">Telefono</label>
                <input className="FormInputUpdate" type="text" id="telefono" name="telefono" placeholder="Ingresar telefono fijo y/o celular" value={telefono} onChange={actualizarDatos} />

                <label htmlFor="email">e-mail</label>
                <input className="FormInputUpdate" type="text" id="email" name="email" placeholder="Ingresar un correo electronico" value={email} onChange={actualizarDatos} />

                <label htmlFor="linkedin">Linkedin direccion</label>
                <input className="FormInputUpdate" type="text" id="linkedin" name="linkedin" placeholder="Agregar el link de linkedin para tu perfil" value={linkedin} onChange={actualizarDatos} />

                <label htmlFor="github">gitHub direccion</label>
                <input className="FormInputUpdate" type="text" id="github" name="github" placeholder="Agregar el link de linkedin para tu perfil" value={github} onChange={actualizarDatos} />

                <input className={`btnSubmit ${loading && `uploading`} ${error && `uploadingError`}`} type="submit" value={loading ? "Uploading..." : (error ? "Error..." : "submit")} />
            </form>
        </>
    )
}