import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
   render() {
      return (
         <nav className="nav-bar">
            <>
               <NavLink className="nav-link" to="/">Home</NavLink>
               <NavLink className="nav-link" to="/about">About</NavLink>
               <NavLink className="nav-link" to="/projects">Projects</NavLink>
               <NavLink className="nav-link" to="/more">More</NavLink>
            </>
         </nav>
      )
   }
}

export default NavBar