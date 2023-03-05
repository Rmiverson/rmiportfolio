import React, { useState } from 'react'
import SocialBar from '../../components/SocialBar'
import { HiOutlineClipboardCopy, HiOutlineCheck } from 'react-icons/hi'

import './Contact.scss'

const Contact = (props) => {
  const [copyState, setCopyState] = useState(<HiOutlineClipboardCopy />)

  function copyEmail() {
    let email = 'rmiverson99@gmail.com'

    navigator.clipboard.writeText(email)
    setCopyState(<HiOutlineCheck />)

    setTimeout(() => {
      setCopyState(<HiOutlineClipboardCopy />)
    }, 2000)
  }

  return (
    <div className='contact'>
      <div className='contact-introduction'>
        <h1>Contact</h1>
        <p>{props.data?.contact?.about}</p>
      </div>

      <div className='contact-email'>
        <a href='mailto:rmiverson99@gmail.com'>rmiverson99@gmail.com</a>
        <button onClick={copyEmail}>{copyState}</button>
      </div>

      <SocialBar />
    </div>
  )
}

export default Contact