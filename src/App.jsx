import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBarCv } from '../componentes/NavBar/NavBarCv'
import { Conocimiento } from '../routes/Concimiento'
import { Cursos } from '../routes/Cursos'
import { Estudios } from '../routes/Estudios'
import { Experiencia } from '../routes/Experiencia'
import { InformacionPage } from '../pages/informacion/InformacionPage'
import { Modal } from '../componentes/modal/Modal'
import {UpdateInformacion} from '../routes/UpdateInformacion'
import { Context } from '../context/Context'
import './App.css'
import { useContext } from 'react'


export const App = () => {
  const {login} = useContext(Context)
  return (
    <>
      <NavBarCv />
      <div className='bigContainer'>
      <div className="sidebar" >
        <InformacionPage />
      </div>
        <div className="body" >
          <Routes className="body" >
            <Route path='/conocimientos' element={<Conocimiento />} />
            <Route path='/cursos' element={<Cursos />} />
            <Route path='/estudios' element={<Estudios />} />
            <Route path='/experiencia' element={<Experiencia />} />
            <Route path='/' element={<Estudios />} />
            <Route path='/*' element={<Navigate to='/estudios' />} />
            <Route path='/CargaDatos' element={login ? <UpdateInformacion/> : <Navigate to='/estudios'/>} />
          </Routes>
        </div>
      </div>
      <Modal />
    </>
  )
}
