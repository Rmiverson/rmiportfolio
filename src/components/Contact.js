import React from 'react'
import {FaTwitter, FaGithub, FaLinkedin, FaBlog} from 'react-icons/fa'

const Contact = () => {
   return (
      <>
         <h3>How to Contact</h3>
         <div id="contact">
            <p>If you're interested in hiring me and want to get in touch, please contact me on Linkedin or email me at: rmiverson99@gmail.com</p>
            <a className="btn" href='mailto:rmiverson99@gmail.com'>rmiverson99@gmail.com</a>            
         </div>

         <div id="social">
            <a href='https://www.linkedin.com/in/rmiverson/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
            <a href='https://twitter.com/rmiverson99' target='_blank' rel="noreferrer"><FaTwitter /></a>
            <a href='https://rmiverson.medium.com/' target='_blank' rel="noreferrer"><FaBlog /></a>
            <a href='https://github.com/Rmiverson' target='_blank' rel="noreferrer"><FaGithub /></a>
         </div>
      </>
   )
}

export default Contact