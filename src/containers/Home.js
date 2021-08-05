import React from 'react'
import { FaAngleDoubleDown, FaDownload } from 'react-icons/fa'
// import data from '../db'

// import InfoBox from '../components/InfoBox'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
// import ProjectSquare from '../components/ProjectSquare'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
import img from '../media/ProfilePicture512.jpg'
import resume from '../media/Riley_M_Iversons_Resume.pdf'

const Home = () => {
   return (
      <div className="home">
         <NavBar />
         <div id="header">   
            <h1 id="main-title">Riley M. Iverson</h1>
            <p>Designer turned Full-Stack Engineer</p>
            <a className="arrow-btn" href="#about"><FaAngleDoubleDown /></a>
         </div>

         <section id="about">
            <h2>About</h2>
            <div className="section-header">
               <img id="profile-pic" src={img} alt="Riley M. Iverson"/>
               <p id="bio">I’m a full-stack software engineer and a former web designer. I live in the beautiful Skagit Valley in Northwest Washington. I graduated from college with an associates in web design, and I’m also a recent graduate from a coding bootcamp called Flatiron School specializing in software engineering. I develop products using a React & Redux frontend with a Ruby on Rails API backend.</p>  
            </div>
            <a className="btn" href={resume} download>Download Resume <FaDownload /></a>
            
            <Skills />
            <Experience />
            <Education />
         </section>

         <section id="projects">
            <h2>Projects</h2>
            <div className="section-header">
               <p>Here are some of my current and past projects that I've worked on!</p>            
            </div>
            <div className="grid">
               <div className="grid-item">
                  <h4>GoodBread - Social Media App</h4>
                  <div className="prj-links">
                     <a className="btn" href="https://youtu.be/5kmKg9wHx8M">Demo</a>
                     <a className="btn" href="https://github.com/Rmiverson/goodbread-frontend">GitHub</a>
                  </div>
                  <p>A current work in progress app that is all about baking and recipes. Users can create profiles, post recipes, follow other users, and like and comment on other recipes.</p>
                  <ul>
                     <li>Used a React frontend with a Ruby on Rails API as the backend</li>
                     <li>Utilized JWT and bcrypt for user authentication</li>
                     <li>Developed with Redux for state managment</li>
                  </ul>
               </div>

               <div className="grid-item">
                  <h4>Dirty30 - Workout App</h4>
                  <div className="prj-links">
                     <a className="btn" href="https://youtu.be/1yL7KKnJWwA">Demo</a>
                     <a className="btn" href="https://github.com/zoekirsh/Dirty30-App-Frontend">GitHub</a>
                  </div>
						<p>A workout app centered around thirty minute workouts with user customizable features. Each exercise includes video demonstrations.</p>
						<ul>
							<li>Developed with a React frontend and Ruby on Rails API for the backend</li>
							<li>Used Asynchronous Javascript and callbacks for the workout timer</li>
							<li>Implemented CSS Flexbox and Grid for layout styling</li>
						</ul>
               </div>

               <div className="grid-item">
                  <h4>Asteroids!!! - Asteroid video game clone</h4>
                  <div className="prj-links">
                     <a className="btn" href="https://youtu.be/B1R7nokpzg0">Demo</a>
                     <a className="btn" href="https://github.com/Rmiverson/astroid-game-frontend">GitHub</a>
                  </div>
						<p>A clone of the arcade game Asteroids that features a leaderboard of the top ten scores.  Users can create profiles, get high scores, and see their scores on the leaderboard.</p>
						<ul>
							<li>Developed with a Ruby on Rails API backend for the database</li>
							<li>Established a game loop to update canvas objects</li>
							<li>Created Javascript forms for user information. Persisting to the Database</li>
						</ul>
               </div>
            </div>
         </section>

         <section id="contact">
               <Contact />
         </section> 
         
         <footer>
            <p>Copyright &copy; Riley Iverson 2021</p>
         </footer>
      </div>
   )
}

export default Home