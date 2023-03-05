import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import './Photography.scss'

const Photography = (props) => {
  const [modal, setModal] = useState({display: 'hidden', media: null})

  const handleClick = (e) => {
    e.preventDefault()

    if (modal.display === 'hidden') {
      setModal({display: 'show', media: e.target.currentSrc})
    }
  }

  const handleClose =() => {
    setModal({display: 'hidden', media: null})
  }

  return (
    <div className='photography'>
        <div className='photography-introduction'>
          <h1>Photography</h1>
          <p>{props.data.photography.about}</p>
        </div>

        <div className='photography-skills-list'>
          <div className='photography-skills-container'>
            <h3>Skills:</h3>
            <ul>
              {props.data.photography.skills.map((skill, index) => {
                let returnValue = skill

                if (index + 1 !== props.data.photography.skills.length) {
                  returnValue = `${skill},`
                }

                return <li key={skill + index}>{returnValue}</li>
              })}
            </ul>
          </div>

          <div className='photography-software-container'>
            <h3>Software:</h3>
            <ul>
              {props.data.photography.software.map((software, index) => {
                let returnValue = software

                if (index + 1 !== props.data.photography.software.length) {
                  returnValue = `${software},`
                }

                return <li key={software + index}>{returnValue}</li>
              })}
            </ul>
          </div>
        </div>

        <div className={modal.display}>
          <img alt='photography example' src={modal.media}/>
          <button onClick={handleClose}>{<AiOutlineClose />}</button>
        </div>

        <div className='photography-examples'>
          {props.data.photography.media.map((media, index) => {
            return (
              <div key={media + index} className='photography-example'>
                <img  alt='photography example' src={`/media/photography/${media}`} onClick={handleClick}/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Photography