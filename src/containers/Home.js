import React from 'react'
import InfoBox from '../components/InfoBox'

const whoSummary = "Short Summary: where I'm from, interest & hobbies"
const whatSummary = "some thing about dev stuff"

const Home = () => {
   return (
      <div className="home-page">
         <div className="title-name">
            <h1>Riley</h1>
            <h1>Iverson</h1>            
         </div>
         
         <div className="summary-container">
            <InfoBox header="Who am I?" para={whoSummary}/>
            <InfoBox header="What I do" para={whatSummary}/>
         </div>
      </div>
   )
}

export default Home