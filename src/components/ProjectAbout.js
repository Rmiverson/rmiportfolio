import react from 'react'
import data from '../db'

const ProjectAbout = () => {
   return (
      <div className='project-about'>
         <h2>{data.projects[this.state.id][0]}</h2>
         <div className="project-demo">
            <h3>Demo</h3>
         </div>
         <div className="project-summary">
            <h3>Summary</h3>
            <p>{data.projects[this.state.id][1]}</p>
         </div>
         <a href={data.projects[this.state.id][3]}>Frontend Github</a>
      </div>  
   )
}

export default ProjectAbout