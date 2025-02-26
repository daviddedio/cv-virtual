import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from '../componentes/modal/context/ModalContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ModalProvider>
        <App />
      </ModalProvider>
    </StrictMode>
  </BrowserRouter>
)
