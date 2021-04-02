import React from 'react'
import {ThemeContext} from '../context/ThemeProvider'
import {ChatContext} from '../context/ChatProvider'

const Navbar = () => {

  const {usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext)
  const {theme} = React.useContext(ThemeContext)

  return (
    <nav 
      style={{
        background: theme.background,
        color: theme.color
      }}
      className="navbar px-3"
    >
      <div className="">
        <img src={usuario.photoURL} alt="" className="mx-1 rounded-circle" width="40px"/>
        {usuario.displayName}
      </div>
      <div>
        {
          usuario.estado ? (
            <button 
              onClick = {cerrarSesion}
              className="btn btn-outline-danger my-2"
            >
              Cerrar Sesión
            </button>
          ) : (
            <button
              onClick = {ingresoUsuario}
              className="btn btn-outline-success my-2"
            >
              Acceder
            </button>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar
