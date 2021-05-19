import React from 'react'
import ProfilePicture192 from '../images/ProfilePicture192.jpg'

const MiniProf = () => {
   return (
      <div className="infobox">
         <h3>Riley M. Iverson</h3>
         <img src={ProfilePicture192} alt='Riley M iverson'></img>
         <ul>
            <li><a href='https://www.linkedin.com/in/rmiverson/' target='_blank' rel="noreferrer">Linkedin</a></li>
            <li><a href='https://twitter.com/rmiverson99' target='_blank' rel="noreferrer">Twitter</a></li>
            <li><a href='https://rmiverson.medium.com/' target='_blank' rel="noreferrer">Blog</a></li>
            <li><a href='https://github.com/Rmiverson' target='_blank' rel="noreferrer">Github</a></li>
            <li><a href='mailto:rmiverson99@gmail.com'>rmiverson99@gmail.com</a> </li>
         </ul>
      </div>
   )
}

export default MiniProf