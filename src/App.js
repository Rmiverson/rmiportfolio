import React from 'react';
import { Switch } from 'react-router';
import './scss/App.scss';

import NotFound from './components/NotFound'
import Home from './containers/Home'
import About from './containers/About'
import More from './containers/More'
import Projects from './containers/Projects'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/home" render={() => <About />} />
          <Route exact path="/home" render={() => <Projects />} />
          <Route exact path="/home" render={() => <More />} />

          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
