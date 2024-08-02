import React from 'react'
import { ChatScreen } from './Screens/ChatScreen'
import { Route, Routes } from 'react-router-dom'
import { ChatHome } from './Screens/ChatHome'
import { Perfil } from './Screens/Perfil'



const App= () =>{
  return (                 
    <>
      <Routes>
        <Route path='/' element={<ChatHome/>}></Route>
        <Route path='/ChatScreen/:contact_id' element={<ChatScreen/>}></Route>
        <Route path='/Perfil/:contact_id' element={<Perfil/>}></Route>
      </Routes>

    </>
  )
}


export default App