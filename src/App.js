import React from "react";
import Navbar from "./components/Navbar";
import {ChatContext} from './context/ChatProvider'
import Chat from "./components/Chat";


function App() {

  const {usuario} = React.useContext(ChatContext)

  return usuario !== null ? (
    <div>
    <Navbar/>
     {
       usuario.estado ? (
         <Chat/>
       ) : (
         <div className="display-5 text-center mt-5">
            Debes iniciar Sesión
         </div>
       )
     }
    </div>
  ) : (
    <div>Cargando...</div>
  )
}

export default App;
