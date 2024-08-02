import React from 'react'
import './ContactosFooter.css'

export const ContactosFooter = () => {
  return (
    <div className='navegador_container'>
      <div className='navegador'>
        <a href="#"><i className="bi bi-chat-left-text-fill"></i><span>Chats</span></a>
        <a href="#"><i className="bi bi-newspaper"></i><span>Novedades</span></a>
        <a href="#"><i className="bi bi-people-fill"></i><span>Comunidades</span></a>
        <a href="#"><i className="bi bi-telephone-fill"></i><span>Llamadas</span></a>
      </div>
    </div>
  
  )
}
