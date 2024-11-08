import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import pp from './the-good-place.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card 
        profile={pp}
        name='TheGoodPlace' 
        username='@TheGoodPlace'
        content= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dicta vitae corrupti saepe, consequatur ipsum, vel ullam blanditiis reiciendis illum, adipisci dolor minus at repudiandae accusantium necessitatibus? Magni, illum nostrum.'
        />
      </header>
    </div>
  );
}

export default App;
