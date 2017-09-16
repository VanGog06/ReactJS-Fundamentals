import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Routes from './Routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
