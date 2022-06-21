import React from 'react'
import NavBar from '../components/NavBar'
import InfoBox from '../components/InfoBox'
import GridList from '../components/InfoBox'


const Home = () => {
   return (
      <div className="home">
         <h1>Riley M. Iverson</h1>
         <NavBar />
         <InfoBox header='About' para='filler'/>
         <GridList header='Skills' list={['templist']} />
         <InfoBox header='Education' para='filler' />
      </div>
   )
}

export default Home