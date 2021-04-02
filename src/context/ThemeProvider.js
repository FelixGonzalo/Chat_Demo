import React from 'react'

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {

  const themes = {
    color: '#000',
    background: '#eee'
  }

  const [theme, setTheme] = React.useState(themes)

  const cambiarColor = valor => {
    setTheme(valor)
    localStorage.setItem('themeLocal', JSON.stringify(valor))
  }

  React.useEffect(() => {
    if (localStorage.getItem('themeLocal')) {
      const themeLocal = JSON.parse(localStorage.getItem('themeLocal'))
      setTheme(themeLocal)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{theme, cambiarColor}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
