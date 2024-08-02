import React from 'react'
import './Mensaje.css'

export const Mensaje = ({mensaje}) => {
  const {author, text, estado, day, hour, id}= mensaje
  let direction;
  if (author === 'yo'){
    direction= 'right';
  }
  return (
    <>
      <div className= {`mensaje ${direction === 'right' ? 'mensaje-derecha' : 'mensaje-izquierda'}`}>
        <h2 className='author'>{author}</h2>
        <p className='texto'>{text}</p>
        <div className='info'>
          <span className='dia_hora'>{estado}</span>
          <span className='dia_hora'>{day} {hour}</span>
        </div>
      </div>
    </>
  )
}
