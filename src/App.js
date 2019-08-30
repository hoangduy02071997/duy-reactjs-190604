import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.data.map(sp => {
        return (
          <div className="App-child">
            <img src={sp.imgURL}></img>
            <h3>{sp.name}</h3>
            <div><span class="span-dollar">{sp.price}</span></div>
          </div>
        );
      })}
    </div>
  )
}

export default App;
