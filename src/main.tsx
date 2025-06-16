import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalProgressBar from './components/common/GlobalProgressBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalProgressBar />
    <App />
    </BrowserRouter>
  </StrictMode>,
)
