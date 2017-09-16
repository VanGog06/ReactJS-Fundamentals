import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
