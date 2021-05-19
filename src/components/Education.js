import React from 'react'

const Education = (props) => {
   return (
      <div className="infobox">
         <h3>{props.header}</h3>
         <p>{props.para}</p>
      </div>
   )
}

export default Education