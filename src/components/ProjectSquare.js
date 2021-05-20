import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSquare = (props) => {
   return (
      <div className="project-square">
         <h3>{props.name}</h3>
         <img href={'../images/project-thumbnails/' + props.thumb} alt={props.name}></img>
         <p>{props.desc}</p>
         <Link to={`/projects/${props.id}`}>Read more...</Link>
      </div>
   )
}

export default ProjectSquare