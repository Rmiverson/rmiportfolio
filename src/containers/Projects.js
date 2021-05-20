import React from 'react'
import ProjectSquare from '../components/ProjectSquare'

const data = [
   ['GoodBread', 'Keystone project backend for Flatiron school. Uses Ruby on Rails as an API with PostgreSQL as the database.', 'Thumb'],
   ['rmiportfolio', 'My current working portfolio. Uses React.js, and SASS for styling.', 'Thumb'],
   ['Dirty30', 'A workout app that uses React.js for a frontend, and Ruby on Rails API for a backend.', 'Thumb'],
   ['Asteroids!!!', 'A clone of the classic arcade game Asteroids. Uses Javascript to power the game logic, and uses a Ruby on Rails API for a Leaderboard database.', 'Thumb'],
   ['Group Finding App', 'A app that lets users to find groups to play with in video games.', 'Thumb'],
   ['Basball Statistics CLI App', 'A CLI app that provides basball statistics and data from an API.', 'Thumb']
]

const Projects = () => {
   return (
      <div className="projects-page">
         <div className="page-title">
            <h2>Projects</h2>
            <p>Here are some of my current and past projects that I've worked on!</p>            
         </div>
         <div className="projects-grid">
            {data.map((project, index) => {
               return(<ProjectSquare key={index} id={index} name={project[0]} desc={project[1]} thumb={project[2]} />)
            })}
         </div>
      </div>
   )
}

export default Projects