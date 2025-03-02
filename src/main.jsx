import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from '../componentes/modal/context/ModalContext'
import { Provider } from '../context/Provider'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Provider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Provider>
    </StrictMode>
  </BrowserRouter>
)
