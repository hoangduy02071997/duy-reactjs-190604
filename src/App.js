import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <div className="App-child">
        {props.data.map(sp => {
          return (
            <>
              <img src={sp.imgURL}></img>
              <h3>{sp.name}</h3>
              <div><span class="span-dollar">{sp.price}</span></div>
            </>
          );
        })}
      </div>
    </div>
  )
}

export default App;
