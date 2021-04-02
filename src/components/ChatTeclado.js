import React from 'react'
import {ChatContext} from '../context/ChatProvider'
import {ThemeContext} from '../context/ThemeProvider'

const ChatTeclado = () => {

  const {usuario, agregarMensajes} = React.useContext(ChatContext)
  const [mensaje, setMensaje] = React.useState('')
  const {theme, cambiarColor} = React.useContext(ThemeContext)

  const agregar = (e) => {
    e.preventDefault()
    if(!mensaje.trim()){
      console.log('tiene vacio')
      return
    }
    agregarMensajes(usuario.uid, mensaje)
    setMensaje('')
  }

  return (
    <form 
      style={{
        background: theme.background,
      }}
      className="fixed-bottom input-group p-3"
      onSubmit={agregar}
    >
      <div className="d-flex flex-column">
        <input
          type="color"
          onChange={e => cambiarColor({...theme, color: e.target.value})}
        />
        <input
          type="color"
          onChange={e => cambiarColor({...theme, background: e.target.value})}
        />
      </div>
      <input
        type="text"
        className="form-control"
        value={mensaje}
        onChange={e => setMensaje(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default ChatTeclado
