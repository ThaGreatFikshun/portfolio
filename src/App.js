import React from 'react';
import logo from './hacker.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="hacker" />
        <p>
         Parental Guidance is Recommended!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
   Welcome to My-Portfolio for Development
        </a>
      </header>
    </div>
  );
}

export default App;
