import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card title='Card' paragraph='@TheGoodPlace'/>
      </header>
    </div>
  );
}

export default App;
