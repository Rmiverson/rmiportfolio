import React from 'react'

const ProjectSquare = (props) => {
   return (
      <div className="project-square">
         <h3>{props.name}</h3>
         <img href={'../images/project-thumbnails/' + props.thumb} alt={props.name}></img>
         <p>{props.desc}</p>
      </div>
   )
}

export default ProjectSquare