import React, {useState, useEffect} from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import SocialBar from '../../components/SocialBar'
import {HiOutlineClipboardCopy, HiOutlineCheck} from 'react-icons/hi'

import './Contact.scss'

const Contact = () => {
  const [result, setResult] = useState({data: {}, status: null, message: null})
  const [copyState, setCopyState] = useState(<HiOutlineClipboardCopy />)

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

  function copyEmail() {
    let email = 'rmiverson99@gmail.com'

    navigator.clipboard.writeText(email)

    setCopyState(<HiOutlineCheck />)

    setTimeout(() => {
      setCopyState(<HiOutlineClipboardCopy />)
    }, 2000)
  }

  if (!result.status) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='contact'>
        <div className='mid-ribbon'>
          <div className='inner-mid-ribbon'></div>
        </div>
        <Nav />

        <div className='contact-content min-height'>
          <div className='contact-introduction'>
            <h1>Contact</h1>
            <p>{result.data?.contact?.about}</p>
          </div>

          <div className='contact-email'>
            <a href='mailto:rmiverson99@gmail.com'>rmiverson99@gmail.com</a>
            <button onClick={copyEmail}>{copyState}</button>
          </div>
          

          <SocialBar />
        </div>

        <Footer />
      </div>
    )
  }
}

export default Contact