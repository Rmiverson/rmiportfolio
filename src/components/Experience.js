import React from 'react'

const Experience = (props) => {
   return (
      <div className="infobox">
         <h3>{props.header}</h3>
         <p>{props.para}</p>
      </div>
   )
}

export default Experience