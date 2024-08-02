import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { lista_contactos } from '/public/data.js'
import './Perfil.css'

export const Perfil = () => {

    const {contact_id}= useParams()
    const contacto= lista_contactos.find((contacto) => {
        return (contacto.id === Number(contact_id))
    })

  return (
    <div className='screen_perfil'>  
        <div className='perfil_header'>
            <div className='perfil_header_controls'>
                <Link to={'/ChatScreen/'+ contact_id}><i className="bi bi-arrow-left"></i></Link>
                <a href="#"><i className="bi bi-three-dots-vertical"></i></a>
            </div>
            <div className='perfil_header_contact'>
                <img src={contacto.thumbnail} alt=""/>
                <h1>{contacto.nombre}</h1>
                <p>{contacto.numero}</p>
            </div>
            
            
            <div className='button_container'>
                <button>
                    <i className="bi bi-telephone"></i>
                    <span>Llamar</span>
                </button>

                <button>
                    <i className="bi bi-camera-video"></i>
                    <span>Video</span>
                </button>

                <button>
                    <i className="bi bi-search"></i>
                    <span>Buscar</span>
                </button>
            </div>
        </div>


        <section className='section_perfil'>
            <div className='div_section' style={{display:'flex', justifyContent:'space-between'}}>
                <p name='images'>Archivos, enlaces y docs.</p>
                <label htmlFor='images'>999 <i style={{fontSize:'15px', paddingRight:'0', paddingLeft:'10px'}} className="bi bi-chevron-right"></i></label>
            </div>

            <div className='div_section'>
                <div className='div_container'>
                    <i className="bi bi-bell" name='icono'></i>
                    <label htmlFor="icono">Notificaciones</label>
                </div>
                <div className='div_container'>
                    <i className="bi bi-image" name='icono'></i>
                    <label htmlFor="icono">Visibilidad de archivos multimedia</label>
                </div>
            </div>
            
    
            <div className='div_section'>
                <div className='div_container'>
                    <i className="bi bi-lock" name='icono'></i>
                    <label htmlFor="icono">Cifrado</label>
                    <p>Los mensajes y las llamadas estan <br/>cifrados de extremo a extremo. Toca para <br/> verificarlo.</p>
                </div>

                <div className='div_container'>
                    <i className="bi bi-clock-history" name='icono'></i>
                    <label htmlFor="icono">Mensajes temporales</label>
                    <p>Desactivados</p>
                </div>
                
                <div className='div_container'>
                    <i className="bi bi-shield-lock-fill" name='icono'></i>
                    <label htmlFor="icono">Restringir chat</label>
                    <p>Restringe y oculta este chat en <br />este dispositivo.</p>
                </div>
            </div>

            <div className='div_section'>
                <div className='div_container'>
                    <i className="bi bi-heart" name='icono'></i>
                    <label htmlFor="icono">Añadir a Favoritos</label>
                </div>
                <div className='div_container'>
                    <i className="bi bi-ban" name='icono' style={{color:'red'}}></i>
                    <label htmlFor="icono">Bloquear a {contacto.nombre}</label>
                </div>
                <div className='div_container'>
                    <i className="bi bi-hand-thumbs-down" name='icono'></i>
                    <label htmlFor="icono">Reportar a {contacto.nombre}</label>
                </div>
            </div>
        </section>
    </div>
  )
}
