import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCardApp from './FlashCardApp';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">React Flash Card App</h1>
        <h2>Cards show below</h2>
        <FlashCardApp />
      </div>
    );
  }
}
export default App;