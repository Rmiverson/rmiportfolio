import React from 'react'
import { Navlink } from 'react-router-dom'

class NavBar extends React.Component {
   render() {
      return (
         <nav className="nav-bar">
            <>
               <Navlink className="nav-link" to="/">Home</Navlink>
               <Navlink className="nav-link" to="/about">About</Navlink>
               <Navlink className="nav-link" to="/projects">Projects</Navlink>
               <Navlink className="nav-link" to="/more">More</Navlink>
            </>
         </nav>
      )
   }
}

export default NavBar