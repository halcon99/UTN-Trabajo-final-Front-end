import React, { useState, useEffect } from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Componentes/Chat'
import './ChatScreen.css'
import { useParams } from 'react-router-dom'
import { lista_contactos } from '/public/data.js'
import { cargarMensajesLS , guardarMensajeLS } from '.'


export const ChatScreen = () => {

    const {contact_id}= useParams()
    const contacto= lista_contactos.find((contacto) => {
        return (contacto.id === Number(contact_id))
    })
    console.log(contacto)

   
    const [mensajes, setMensajes]= useState(contacto ? contacto.mensajes : []);


    useEffect(()=>{
        const mensajes_guardadosLS= cargarMensajesLS(contact_id);
        if (mensajes_guardadosLS.length > 0){
            setMensajes(mensajes_guardadosLS);
        }
    }, [contact_id])

    useEffect(()=>{
        guardarMensajeLS(contact_id, mensajes);
    }, [contact_id, mensajes])

   
    const agregarMensaje= (mensajeNuevo) =>{
        const nuevoMensaje= {
            author: 'yo',
            text: mensajeNuevo,
            estado: 'visto',
            day: 'hoy',
            hour: '13:18',
            id: mensajes.length + 1
        }
        
        setMensajes([...mensajes, nuevoMensaje])
    }


  return (
    <div className='chat'>
        <ChatHeaderInfo contacto={contacto}/>
        <div className='lista_mensajes'>
            <ListaMensajes mensajes={mensajes}/>
        </div>
        <MensajeForm addMensaje={agregarMensaje}/>
    </div>
  )
}
