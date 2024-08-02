import React from 'react'
import { Mensaje } from '../Mensaje/Mensaje'
import './ListaMensajes.css'

export const ListaMensajes = ({mensajes}) => {
  return (
    <> 
      
      {
        mensajes.map((mensaje) => <Mensaje mensaje= {mensaje} key={mensaje.id}/>)
          
      }
      

    </>
  )
}
