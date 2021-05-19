import React from 'react'
import InfoBox from '../components/InfoBox'

const whoSummary = "I’m based in Washington, in the beautiful Pacific Northwest. I have a passion for video games, with some of my favorites being Pokemon, Stardew Valley, and Animal Crossing. I am also a photographer, taking photos mostly of nature and landscapes. "
const whatSummary = "I’m a full-stack software engineer and a former web designer. I graduated from college with an associates in web design, and I’m also a recent graduate from a coding bootcamp called Flatiron School specializing in software engineering. I develop products using a React & Redux frontend with a Ruby on Rails API backend"

const Home = () => {
   return (
      <div className="home-page">
         <div className="title-name">
            <h1>Riley</h1>
            <h1>Iverson</h1>            
         </div>
         
         <div className="summary-container">
            <InfoBox header="What I do" para={whatSummary}/>
            <InfoBox header="Who am I?" para={whoSummary}/>
         </div>
      </div>
   )
}

export default Home