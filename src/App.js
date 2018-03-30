import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ProfileContainer from './containers/ProfileContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to EventBite!</h1>
          <p className="App-intro">Find fun events based on  your interests!</p>
        </header>
      <ProfileContainer  />
      </div>
    );
  }
}

export default App;
