import React from 'react'  //todos los archivos JSX deben importar a react

//usamos reactDOM para crear nuestro dom virtual(de react)
import ReactDOM from 'react-dom/client'

//componente App
//los componentes son funciones que retornan JSX (JSX es un codigo parecido a html)
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'


//creo un dom virtual en el elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)