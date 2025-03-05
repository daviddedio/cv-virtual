import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './NavBarCv.css'

export const NavBarCv = () => {


    const [estudio, setEstudio] = useState("no")
    const [experiencia, setExperiencia] = useState("no")
    const [cursos, setCursos] = useState("no")
    const [conocimiento, setConocimiento] = useState("no")

    const activar = (act) => {

        act === 'estudio' ? setEstudio('activo') : setEstudio('no')
        act === 'experiencia' ? setExperiencia('activo') : setExperiencia('no')
        act === 'cursos' ? setCursos('activo') : setCursos('no')
        act === 'conocimiento' ? setConocimiento('activo') : setConocimiento('no')
    }

    useEffect(()=>{
        activar('estudio')
    },[])

    return (
        <div className="navbar">

            <NavLink className={estudio} onClick={() => { activar('estudio') }} id='estudios' to='/estudios'><i className="fa fa-fw fa-book"></i> <span>estudios</span></NavLink>
            <NavLink className={experiencia} onClick={() => { activar('experiencia') }} id='experiencia' to='/experiencia'><i className="fa fa-fw fa-sheet-plastic"></i> <span>experiencia</span></NavLink>
            <NavLink className={cursos} onClick={() => { activar('cursos') }} id='cursos' to='/cursos'><i className="fa fa-fw fa-certificate"></i> <span>cursos</span></NavLink>
            <NavLink className={conocimiento} onClick={() => { activar('conocimiento') }} id='conocimientos' to='/conocimientos'><i className="fa fa-fw fa-star"></i> <span>conocimientos</span></NavLink>
        </div>
    )
}