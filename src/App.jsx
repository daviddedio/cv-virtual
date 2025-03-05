import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBarCv } from '../componentes/NavBar/NavBarCv'
import { Conocimiento } from '../routes/Concimiento'
import { Cursos } from '../routes/Cursos'
import { Estudios } from '../routes/Estudios'
import { Experiencia } from '../routes/Experiencia'
import { InformacionPage } from '../pages/informacion/InformacionPage'
import { Modal } from '../componentes/modal/Modal'
import './App.css'


export const App = () => {

  return (
    <>
    <div className="headerCV">
      <img src="/src/assets/react.svg" alt="csa" />
      <h1>Curriculum Virtual</h1>
    </div>
      <div className="sidebar" >
        <InformacionPage />
      </div>
      <div className='bigContainer'>
      <NavBarCv />
        <div className="body" >
          <Routes className="body" >
            <Route path='/conocimientos' element={<Conocimiento />} />
            <Route path='/cursos' element={<Cursos />} />
            <Route path='/estudios' element={<Estudios />} />
            <Route path='/experiencia' element={<Experiencia />} />
            <Route path='/' element={<Estudios />} />
            <Route path='/*' element={<Navigate to='/estudios' />} />
          </Routes>
        </div>
      </div>
      <Modal />
    </>
  )
}
