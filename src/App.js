import React, {useEffect, useState} from 'react'
import './scss/App.scss'
import RouteBoard from './RoutBoard'
import Nav from './components/Nav'
import Splash from './components/Splash'
import Footer from './components/Footer'

const App = () => {
  const [result, setResult] = useState({data: {}, status: null, message: null})

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

  if (!result.status) {
    return <span>Loading...</span>
  } else {
    return (
      <div className='App'>
        <div className='landing'>
          <div className='splash-content'>
            <Splash />
            <div className='landing-ribbon'>
              <div className='inner-landing-ribbon'></div>
            </div>
          </div>

          <div className='mid-ribbon-container'>
            <div className='mid-ribbon-corner-l'>
              <div className='inner-mid-ribbon-corner-l'></div>
            </div>

            <div className='mid-ribbon'>
              <div className='inner-mid-ribbon'></div>
            </div>

            <div className='mid-ribbon-corner-r'>
              <div className='inner-mid-ribbon-corner-r'></div>
            </div>           
          </div>
        </div>

        <div className='lower-content'>
          <div className='body-ribbon'>
            <div className='inner-body-ribbon'></div>
          </div>

          <div className='main-body'>
            <Nav />
            <RouteBoard result={result.data}/>              
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default App
