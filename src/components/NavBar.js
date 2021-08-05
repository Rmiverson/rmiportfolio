import React, { useEffect } from 'react'

const NavBar = () => {

   useEffect(() => {
      window.addEventListener("scroll", handleScroll)
      return () => {
         window.removeEventListener("scroll", handleScroll)
      };
   }, []);

   const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 10) {
         document.querySelector("nav").className = "scroll"
      } else {
         document.querySelector("nav").className = ""
      }
   }

   return (
      <nav>
         <a href="#header" className="nav-link">Home</a>
         <a href="#about" className="nav-link">About</a>
         <a href="#projects" className="nav-link">Projects</a>
         <a href="#contact" className="nav-link">Contact</a>
      </nav>
   )   
}

export default NavBar