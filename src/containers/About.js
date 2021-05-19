import React from 'react'

import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import MiniProf from '../components/MiniProf'
import Skills from '../components/Skills'
import Summary from '../components/Summary'

const About = () => {
   return (
      <div className="about-page">
         <MiniProf />
         <Summary />
         <Skills />
         <Experience />
         <Education />
         <Contact />
      </div>
   )
}

export default About