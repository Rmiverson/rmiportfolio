import React from 'react'
import SocialBar from '../../components/SocialBar'
import Tilt from 'react-parallax-tilt'
import { BsCloudDownload } from 'react-icons/bs'

import './AboutMe.scss'

const AboutMe = (props) => {
  return (
    <section className='about-me'>
      {props.data?.aboutMe?.introduction.map((value, index) => {
        if (index === 0) {
          return (
            <div className='about-introduction' key={value}>
                <Tilt>
                  <img alt='Riley Iverson' src='media/ProfilePicture192.jpg' />  
                </Tilt>

                <div className='about-introduction-content'>
                  <h2>About Me</h2>
                  <p>{value}</p>
                </div>
            </div>
          )
        } else {
          return <p key={value}>{value}</p>
        }
      })}

      <div className='education'>
        <h2>Education</h2>
        {props.data?.aboutMe?.education.map((item, index) => {
          return (
            <div key={item.name + index} className='education-item'>
              <div className='education-item-header'>
                <h3>{item.name}</h3>
                <p>{`${item.school} || ${item.year}`}</p>
              </div>

              <p>{item.description}</p>
            </div>
          )
        })}
      </div>

      <SocialBar />

      <div className='download'>
        <h3>Download My Resume</h3>
        <a href='/media/Riley_Iversons_Resume.pdf' download><BsCloudDownload /></a>
      </div>         
    </section>
  )
}

export default AboutMe