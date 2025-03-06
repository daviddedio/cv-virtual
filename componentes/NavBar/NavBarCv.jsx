import { NavLink } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { Context } from '../../context/Context'
import './NavBarCv.css'

export const NavBarCv = () => {

    const { login, setLogin } = useContext(Context)

    const [estudio, setEstudio] = useState("no")
    const [experiencia, setExperiencia] = useState("no")
    const [cursos, setCursos] = useState("no")
    const [conocimiento, setConocimiento] = useState("no")
    const [actualizar, setActualizar] = useState("no")
    const [visualiza, setVisualiza] = useState()
    const [visible, setVisible] = useState(['Visible', 'Invisible'])

    const crearFormulario = (dato) => {
        console.log(dato)
    }

    const doRequest = (e, arr) => {
        e.preventDefault()
        setVisible(arr)
        setLogin(!login)

    }

    const activar = (act) => {
        act === 'estudio' ? setEstudio('activo') : setEstudio('no')
        act === 'experiencia' ? setExperiencia('activo') : setExperiencia('no')
        act === 'cursos' ? setCursos('activo') : setCursos('no')
        act === 'conocimiento' ? setConocimiento('activo') : setConocimiento('no')
        act === 'actulizar' ? setActualizar('activo') : setActualizar('no')
    }

    useEffect(() => {
        activar('estudio')
    }, [])

    return (
        <div className="navbar">

            <NavLink className={estudio} onClick={() => { activar('estudio') }} id='estudios' to='/estudios'><i className="fa fa-fw fa-book"></i> <span>estudios</span></NavLink>
            <NavLink className={experiencia} onClick={() => { activar('experiencia') }} id='experiencia' to='/experiencia'><i className="fa fa-fw fa-sheet-plastic"></i> <span>experiencia</span></NavLink>
            <NavLink className={cursos} onClick={() => { activar('cursos') }} id='cursos' to='/cursos'><i className="fa fa-fw fa-certificate"></i> <span>cursos</span></NavLink>
            <NavLink className={conocimiento} onClick={() => { activar('conocimiento') }} id='conocimientos' to='/conocimientos'><i className="fa fa-fw fa-star"></i> <span>conocimientos</span></NavLink>
            {
                login &&
                <NavLink className={actualizar} onClick={() => { activar('actulizar') }} id='update' to='/CargaDatos' ><i className="fa-solid fa-key"></i><span> Actulizacion</span></NavLink>
            }

            <div className="login-container">
                <form action="" className={visible[0]}>
                    <input type="text" placeholder="Username" name="username" onChange={() => crearFormulario()} />
                    <input type="text" placeholder="Password" name="psw" />
                    <button onClick={(e) => { doRequest(e, ['Invisible', 'Visible']) }}>LogIn</button>
                </form>
                <form action="" className={visible[1]}>
                    <button onClick={(e) => { doRequest(e, ['Visible', 'Invisible']) }}>LogOut</button>
                </form>
            </div>

        </div>
    )
}