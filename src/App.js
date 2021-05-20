import React from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './scss/App.scss'

import NotFound from './components/NotFound'
import Home from './containers/Home'
import About from './containers/About'
import More from './containers/More'
import Projects from './containers/Projects'
import NavBar from './components/NavBar'
import ProjectAbout from './components/ProjectAbout'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/projects" render={() => <Projects />} />
          <Route path='/projects/:projectKey' render={() => <ProjectAbout />} />
          <Route exact path="/more" render={() => <More />} />

          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
