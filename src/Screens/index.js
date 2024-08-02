import { ChatScreen } from "./ChatScreen";
import { ChatHome } from "./ChatHome";



const cargarMensajesLS= (contact_id) =>{
    const mensajes_guardadosLS= localStorage.getItem(`chatMessages_${contact_id}`)
    return mensajes_guardadosLS ? JSON.parse(mensajes_guardadosLS) : []
}
  
const guardarMensajeLS= (contact_id, mensajes) =>{
    localStorage.setItem(`chatMessages_${contact_id}`, JSON.stringify(mensajes))
}


export {ChatScreen,ChatHome,cargarMensajesLS,guardarMensajeLS}
