import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBarCv } from '../componentes/NavBar/NavBarCv'
import { Conocimiento } from '../routes/Concimiento'
import { Cursos } from '../routes/Cursos'
import { Estudios } from '../routes/Estudios'
import { Experiencia } from '../routes/Experiencia'
import { Informacion } from '../routes/Informacion'
import { InformacionPage } from '../pages/informacion/InformacionPage'
import './App.css'

export const App = () => {

  return (
    <>
      <NavBarCv />
      <div className='bigContainer'>
        <InformacionPage/>
        <Routes>
          <Route path='/conocimientos' element={<Conocimiento />} />
          <Route path='/cursos' element={<Cursos />} />
          <Route path='/estudios' element={<Estudios />} />
          <Route path='/experiencia' element={<Experiencia />} />
          <Route path='/' element={<Estudios />} />
          <Route path='/*' element={<Navigate to='/estudios'/>} />
        </Routes>
      </div>
    </>
  )
}
