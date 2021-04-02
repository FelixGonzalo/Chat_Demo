import React from 'react'
import {ThemeContext} from '../context/ThemeProvider'
import {ChatContext} from '../context/ChatProvider'

const Navbar = () => {

  const {usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext)
  const {theme, cambiarColor} = React.useContext(ThemeContext)

  return (
    <nav 
      style={{
        background: theme.background,
        color: theme.color
      }}
      className="navbar navbar-dark bg-dark px-3"
    >
      <span className="navbar-brand">Chat</span>
      <div>
        <input
          type="color"
          onChange={e => cambiarColor({...theme, color: e.target.value})}
        />
        <input
          type="color"
          onChange={e => cambiarColor({...theme, background: e.target.value})}
        />
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
