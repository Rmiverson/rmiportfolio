import React from 'react'
import data from '../db'

import InfoBox from '../components/InfoBox'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import ProjectSquare from '../components/ProjectSquare'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'


const Home = () => {
   return (
      <div className="home-page">
         <div id="header" className="header">
            <h1>Riley</h1>
            <h1>Iverson</h1>     

            <NavBar /> 
         
            <InfoBox header="What I do" para={data.summary.what}/>
            <InfoBox header="Who am I?" para={data.summary.who}/>
         </div>

         <div id="about">
            <Skills />
            <Experience />
            <Education />
         </div>

         <div id="projects">
            <div className="title">
               <h2>Projects</h2>
               <p>Here are some of my current and past projects that I've worked on!</p>            
            </div>
            <div className="projects-grid">
               {data.projects.map((project, index) => {
                  return(<ProjectSquare key={index} id={index} name={project[0]} desc={project[1]} thumb={project[2]} />)
               })}
            </div>
         </div>

         <div id="contact">
               <Contact />
         </div> 
      </div>
   )
}

export default Home