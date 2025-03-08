import { NavLink } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { Context } from '../../context/Context'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../FireBase/FireBaseReturnData'
import { useModalContext } from '../../componentes/modal/context/ModalContext'
import { CustomAlert } from '../Alerta/CustomAlert';
import './NavBarCv.css'

export const NavBarCv = () => {

    const { setComponente, setState } = useModalContext()

    const { login, setLogin } = useContext(Context)

    const [estudio, setEstudio] = useState("no")
    const [experiencia, setExperiencia] = useState("no")
    const [cursos, setCursos] = useState("no")
    const [conocimiento, setConocimiento] = useState("no")
    const [actualizar, setActualizar] = useState("no")
    const [visualiza, setVisualiza] = useState()
    const [visible, setVisible] = useState(['Visible', 'Invisible'])

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formulario, setFormulario] = useState({
        username: '', password: ''
    })

    const { username, password } = formulario

    const actualizarDatos = ({ target }) => {
        const { name, value } = target

        setFormulario({
            ...formulario, [name]: value
        })
    }

    const logIn = async (e, arr) => {
        e.preventDefault()
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "Login"));
            const data = querySnapshot.docs.map(doc => doc.data())
            //setData(data)
            if (data[0].User === username & data[0].Password == password) {
                setLogin(!login)
                setVisible(arr)
            } else {
                throw "Datos erroneos"
            }
        } catch (error) {
            mostrarModal(error, 2)
        } finally {
            setLoading(false)
        }
    }
    
    const logOut = (e, arr) =>{
        e.preventDefault()
        setVisible(arr)
        setLogin(!login)
        setFormulario({ username: '', password: '' })
    
    }

    const mostrarModal = (mensaje, type) => {
        setComponente(<CustomAlert mensaje={mensaje} ntype={type} />)
        setState(true)
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
                    <input className="InputFormNavBar" type="text" placeholder="Username" name="username" value={username} onChange={actualizarDatos} />
                    <input className="InputFormNavBar" type="password" placeholder="password" name="password" value={password} onChange={actualizarDatos} />
                    <button className='btnLogIn' onClick={(e) => { logIn(e, ['Invisible', 'Visible']) }}>LogIn</button>
                </form>
                <form action="" className={visible[1]}>
                    <button className='btnLogOut' onClick={(e) => { logOut(e, ['Visible', 'Invisible']) }}>LogOut</button>
                </form>
            </div>

        </div>
    )
}