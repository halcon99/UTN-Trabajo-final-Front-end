import React, { useState } from 'react'
import { ContactosHeader } from '../Componentes/Contactos/ContactosHeader/ContactosHeader'
import { ListaContactos } from '../Componentes/Contactos/ListaContactos/ListaContactos'
import { ContactosFooter } from '../Componentes/Contactos/ContactosFooter/ContactosFooter'
import './ChatHome.css'

export const ChatHome = () => {

    const [searchString, setSearchString]= useState('')
    
  return (
        <div className='home'>
            <ContactosHeader setSearchString={setSearchString}/>
            <div className='contactos'>
                <ListaContactos searchString={searchString}/>
            </div>
            <ContactosFooter/>
        </div>

    )
}