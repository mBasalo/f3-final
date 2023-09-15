import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, handleChangeTheme } = useContext(ContextGlobal)

  const style = {color: theme.font} 


  return (
    <nav style={{ backgroundColor: theme.navBackground, color: theme.font, boxShadow: theme.borderShadow }}>

<img src="/DH.ico" alt="icon" />

      <div>
       

      
        
        <NavLink to={"/"} style={style} className={({ isActive }) => isActive ? "active" : ""}>
          Home
        </NavLink>

        <NavLink to={"/contact"} style={style} className={({ isActive }) => isActive ? "active" : ""}>
          Contacto
        </NavLink>

        <NavLink to={"/favs"} style={style} className={({ isActive }) => isActive ? "active" : ""}>
          Favoritos
        </NavLink>

    
      </div>

      <button onClick={() => handleChangeTheme()}>Cambiar Tema</button>
    </nav>
  )
}

export default Navbar