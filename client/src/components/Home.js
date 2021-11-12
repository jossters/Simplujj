import burger from '../burger.png'
import '../App.css';
import React from 'react';

const Home = () => {
    return(
        <div className="App">
      <header className="App-header">
        <img src={burger} className="App-logo" alt="logo" />
        <span></span>
        <p>
          Simplujj Burgers
        </p>
      </header>
    </div>
    );
}

export default Home;