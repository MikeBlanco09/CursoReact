import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Gifsapp } from './Gifsapp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gifsapp />
  </StrictMode>,
)
