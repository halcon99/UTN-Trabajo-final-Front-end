import React, { useEffect, useState } from 'react'
import { lista_contactos } from '/public/data.js'
import { Link } from 'react-router-dom'
import './ListaContactos.css'

export const ListaContactos = ({searchString}) => {
    
    //crear una funcion para
    //traer los contactos del localstorage y meterlos todos en un array grande y despues hacer el filter de ese array
    const [contactos, setContactos]= useState([])
 

    useEffect(()=>{
        const allChats=[]
        lista_contactos.forEach(contacto =>{
            const mensajesLS= JSON.parse(localStorage.getItem('chatMessages_'+ contacto.id))
            if (mensajesLS){
                allChats.push({...contacto,
                mensajes: mensajesLS})
            }else{
                allChats.push(contacto)
            }
        })
        console.log(allChats)
        setContactos(allChats);
    },[])
    


    const contactos_filtrados= contactos.filter(contacto => 
        contacto.nombre.toLowerCase().includes(searchString.toLowerCase())
    )
        

  return (
    <div>
        {contactos_filtrados.map((contacto, index) => {
            let ultimo_mensaje= contacto.mensajes.length > 0
                ? contacto.mensajes[contacto.mensajes.length -1].text
                : "No hay mensajes"

            let ultimo_mensaje_hora= contacto.mensajes.length > 0
                ? contacto.mensajes[contacto.mensajes.length -1].hour
                : "No hay mensajes"

            return (
                <Link to={'/ChatScreen/' + contacto.id} className='link' key={index}>
                    <div key={contacto.id} className='div_contacto'>
                        <img src={contacto.thumbnail} alt="" className='foto_contacto'/>
                        <div className='div_info'>
                            <h2>{contacto.nombre}</h2>
                            <p>{contacto.ultima_conexion}</p>
                            <p style={{color:'green'}}>{ultimo_mensaje_hora}</p>
                            <span className='ultimo_mensaje'>{ultimo_mensaje}</span> 
                        </div>

                    </div>  
                </Link>
        
            )
        })
        }
    </div>
  )
}

