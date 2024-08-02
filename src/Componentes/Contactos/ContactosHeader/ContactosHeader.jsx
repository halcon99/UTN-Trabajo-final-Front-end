import React from 'react'
import './ContactosHeader.css'


export const ContactosHeader = ({setSearchString}) => {

  const handleChangeValue= (e)=>{
    setSearchString(e.target.value)

  }

  return (
    <div className='header'>
      <div className='wazap'>
        <h1>WAZAP</h1>
        <div className='icons_container'>
          <a href="#" className='icon'><i className="bi bi-camera"></i></a>
          <a href="#" className='icon'><i className="bi bi-three-dots-vertical"></i></a>
        </div>
      </div>

      <div className='input_container'>
          <button type='submit'><i className="bi bi-search"></i></button>
          <input type="text" className='input_search' placeholder='Buscar...' 
          onChange={handleChangeValue} />
      </div>

    </div>
  )
}
