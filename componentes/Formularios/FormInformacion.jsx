import { Input } from '@mui/material'
import './FormStyles.css'

export const FormInformacion = () => {
    return (
        <>
            <h2>Actualizar Informacion General, contacto y redes</h2>
            <hr />
            <form action="/action_page.php">
                <label htmlFor="Nombre">Nombre</label>
                <input className="FormInputUpdate" type="text" id="Nombre" name="Nombre" placeholder="Ingresar Nombre" />

                <label htmlFor="Nacimiento">Fecha de nacimiento</label>
                <input className="FormInputUpdate" type="text" id="Nacimiento" name="Nacimiento" placeholder="Ingresar Fecha de nacimiento toString()" />

                <label htmlFor="EstadoCivil">Estado Civil</label>
                <select id="EstadoCivil" name="EstadoCivil" className="FormInputUpdate">
                    <option value="Casado">Casado</option>
                    <option value="Soltero">Soltero</option>
                    <option value="Concubinato">Concubinato</option>
                </select>

                <label htmlFor="Nacionalidad">Nacionalidad</label>
                <select id="Nacionalidad" name="Nacionalidad" className="FormInputUpdate">
                    <option value="Argentina">Argentina</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Ecuador">Ecuador</option>
                </select>

                <label htmlFor="Conducir">Licencia de conducir</label>
                <input className="FormInputUpdateCheck" type="checkbox" id="Conducir"/> 
                <div/>

                <label htmlFor="Domicilio">Domicilio</label>
                <input className="FormInputUpdate" type="text" id="Domicilio" name="Domicilio" placeholder="Ingresar calle y nro de domicilio" />

                <label htmlFor="Telefono">Telefono</label>
                <input className="FormInputUpdate" type="text" id="Telefono" name="Telefono" placeholder="Ingresar telefono fijo y/o celular" />

                <label htmlFor="email">e-mail</label>
                <input className="FormInputUpdate" type="text" id="email" name="email" placeholder="Ingresar un correo electronico" />

                <label htmlFor="linkedin">Linkedin direccion</label>
                <input className="FormInputUpdate" type="text" id="linkedin" name="linkedin" placeholder="Agregar el link de linkedin para tu perfil" />

                <label htmlFor="gitHub">gitHub direccion</label>
                <input className="FormInputUpdate" type="text" id="gitHub" name="gitHub" placeholder="Agregar el link de linkedin para tu perfil" />

                <input className="btnSubmit" type="submit" value="Submit" />
            </form>
        </>
    )
}
