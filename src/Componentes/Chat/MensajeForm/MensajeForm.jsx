import React from 'react'
import './MensajeForm.css'

export const MensajeForm = ({addMensaje}) => {
  const handleSubmit= (e) =>{
    e.preventDefault();
    const mensaje= e.target.input.value.trim();
    if (mensaje){
      addMensaje(mensaje)
      e.target.reset()
      console.log(e);
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='input_submit'>
        <a href="#"><i className="bi bi-emoji-laughing"></i></a>
        <input type="text" name='input' className='input' placeholder='Mensaje'/>
        <button className='btn' type='submit'><i className="bi bi-send-fill"></i></button>
      </div>
    </form>
  )
}

/*
    e.preventDefault();
    addMensaje(e.target.input.value)
    e.target.reset();
    console.log(e);
*/