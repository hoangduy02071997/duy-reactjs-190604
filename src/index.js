import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const product = [{
    img:'./assets/pro1.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro1.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro1.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro1.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro1.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },{
    img:'./assets/pro1.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro1.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  }];
ReactDOM.render(<App data={product}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
