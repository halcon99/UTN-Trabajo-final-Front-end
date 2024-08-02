import React, { useState } from 'react'
import './ChatHeaderInfo.css'
import { Link } from 'react-router-dom'

export const ChatHeaderInfo = ({contacto}) => {
  const {nombre, thumbnail, id} = contacto

  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu= () =>{
    setMenuVisible(!menuVisible)
  }


  return (
    <>
      <div className="chat_header">
        <div className="contacto">
            <Link to={'/'}><i className="bi bi-arrow-left"></i></Link>
            <img src={thumbnail} className="img_header" alt="" />
            <Link to={'/Perfil/'+ contacto.id}><h1 className="nombre">{nombre}</h1></Link>
        </div>
        <div className='icons_header'>
            <a href="#" className='icon'><i className="bi bi-camera-video"></i></a>
            <a href="#" className='icon'><i className="bi bi-telephone"></i></a>
            <a href="#" className='icon'><i className="bi bi-three-dots-vertical"></i></a>
            <a href="#" className='hamburguesa' onClick={toggleMenu}><i className="bi bi-list"></i></a>
        </div>
      </div>

      {menuVisible && (
        <div className="menu_opciones">
          <a href="#">Ver contacto</a>
          <a href="#">Archivos, enlaces y docs</a>
          <a href="#">Buscar</a>
          <a href="#">Silenciar notificaciones</a>
          <a href="#">Mensajes temporales</a>
          <a href="#">Fondo de pantalla</a>
          <a href="#">Más</a>
        </div>
      )}
    </>
    
  )
}

