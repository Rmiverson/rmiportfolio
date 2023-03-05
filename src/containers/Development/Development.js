import React from 'react'
import { BsGithub } from 'react-icons/bs'

import './Development.scss'

const Development = (props) => {
  return (
    <div className='development'>
      <div className='development-introduction'>
        <h1>Software Development</h1>
        {props.data.development.about.map((paragraph, index) => {
          return <p key={paragraph + index}>{paragraph}</p>
        })} 
      </div>

      <div className='skill-list'>
        <div className='skills-container'>
          <h3>Skills:</h3>
          <ul>
            {props.data.development.skills.skills.map((skill, index) => {
              let returnValue = skill

              if (index + 1 !== props.data.development.skills.skills.length) {
                returnValue = `${skill},`
              }

              return <li key={skill + index}>{returnValue}</li>
            })}                
          </ul>
        </div>

        <div className='languages-container'>
          <h3>Languages:</h3>
          <ul>
            {props.data.development.skills.languages.map((language, index) => {
              let returnValue = language

              if (index + 1 !== props.data.development.skills.languages.length) {
                returnValue = `${language},`
              }

              return <li key={language + index}>{returnValue}</li>
            })}                
          </ul>
        </div>

        <div className='tools-container'>
          <h3>Tools:</h3>
          <ul>
            {props.data.development.skills.tools.map((tool, index) => {
              let returnValue = tool

              if (index + 1 !== props.data.development.skills.tools.length) {
                returnValue = `${tool},`
              }

              return <li key={tool + index}>{returnValue}</li>
            })}                
          </ul>
        </div>
      </div>

      <div className='development-projects'>
        {props.data.development.projects.map((project, index) => {
          return (
            <div className='project' key={project.name + index}>
              <h2>{project.name}</h2>
              <p>{project.about}</p>

              <div className='sub-sections'>
                {project.subSections.map((subSection, index) => {
                  return (
                    <div key={subSection.name + index} className='sub-section'>
                      <h3>{subSection.name}</h3>
                      <p>{subSection.about}</p>
                      <a href={subSection.link} target="_blank" rel="noreferrer noopener"><BsGithub /></a>
                    </div>
                  )
                })}                  
              </div>

              <img alt='Project Example' src={`/media/dev/${project.media}`}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default Development