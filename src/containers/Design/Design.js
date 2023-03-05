import React from 'react'

import './Design.scss'

const Design = (props) => {
  return (
    <div className='design'>
      <div className='design-introduction'>
        <h1>Design & Creative</h1>
        {props.data?.design?.introduction.map((paragraph, index) => <p key={paragraph + index}>{paragraph}</p>)}
      </div>

      <div className='design-skills-list'>
        <div className='design-skills-container'>
          <h3>Skills:</h3>

          <ul>
            {props.data?.design?.skills.skills.map((skill, index) => {
              let returnValue = skill

              if (index + 1 !== props.data.design.skills.skills.length) {
                returnValue = `${skill},`
              }

              return <li key={skill + index}>{returnValue}</li>
            })}
          </ul>
        </div>

        <div className='design-software-container'>
          <h3>Software:</h3>

          <ul>
            {props.data?.design?.skills.software.map((software, index) => {
              let returnValue = software

              if (index + 1 !== props.data.design.skills.software.length) {
                returnValue = `${software},`
              }

              return <li key={software + index}>{returnValue}</li>
            })}
          </ul>
        </div>
      </div>

      <div className='design-projects'>
        {props.data?.design?.projects.map((project, index) => {
          return (
            <div key={project.name + index} className='design-project'>
              <h2>{project.name}</h2>
              <p>{project.about}</p>
              <img alt='Project Example' src={`/media/design/${project.media}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Design