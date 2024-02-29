import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Router from './routes/Router.tsx'
import { BrowserRouter } from 'react-router-dom'
import '@progress/kendo-react-data-tools'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
