import React from 'react';
import './scss/App.scss';
import RouteBoard from './RoutBoard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <RouteBoard />
      <Footer />
    </div>
  );
};

export default App;
