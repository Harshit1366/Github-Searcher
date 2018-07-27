import React, { Component } from 'react';
import logo from './logo.svg';
import Github from './Github';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Github Searcher</h1>
        </header>
        <Github/>
      </div>
    );
  }
}

export default App;
