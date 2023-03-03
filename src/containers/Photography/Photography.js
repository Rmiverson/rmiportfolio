import React, {useState, useEffect} from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import {AiOutlineClose} from 'react-icons/ai'

import './Photography.scss'

const Photography = () => {
  const [result, setResult] = useState({data: {}, status: null, message: null})
  const [modal, setModal] = useState({display: 'hidden', media: null})

  useEffect(() => {
    async function getData() {
      try {
        await fetch('db.json', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then((response) => response.json())
        .then((data) => {
          setResult({data: data, status: 200, message: 'OK'})
        })
      } catch (error) {
        setResult({data: {}, status: error, message: error})
      }
    }
  
    getData()
  }, [])

  const handleClick = (e) => {
    e.preventDefault()

    if (modal.display === 'hidden') {
      setModal({display: 'show', media: e.target.currentSrc})
    }
  }

  const handleClose =() => {
    setModal({display: 'hidden', media: null})
  }

  if (!result.status) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='photography'>
        <div className='mid-ribbon'>
          <div className='inner-mid-ribbon'></div>
        </div>

        <Nav />

        <div className='photography-content min-height'>
          <div className='photography-introduction'>
            <h1>Photography</h1>
            <p>{result.data.photography.about}</p>
          </div>

          <div className='photography-skills-list'>
            <div className='photography-skills-container'>
              <h3>Skills:</h3>
              <ul>
                {result.data.photography.skills.map((skill, index) => {
                  let returnValue = skill

                  if (index + 1 !== result.data.photography.skills.length) {
                    returnValue = `${skill},`
                  }

                  return <li key={skill + index}>{returnValue}</li>
                })}
              </ul>
            </div>

            <div className='photography-software-container'>
              <h3>Software:</h3>
              <ul>
                {result.data.photography.software.map((software, index) => {
                  let returnValue = software

                  if (index + 1 !== result.data.photography.software.length) {
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
            {result.data.photography.media.map((media, index) => {
              return (
                <div key={media + index} className='photography-example'>
                  <img  alt='photography example' src={`/media/photography/${media}`} onClick={handleClick}/>
                </div>
              )
            })}
          </div>

          <Footer />
        </div>
      </div>
    )
  }
}

export default Photography