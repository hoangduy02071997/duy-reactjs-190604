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
    img:'./assets/pro2.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro3.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro4.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },{
    img:'./assets/pro6.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro7.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro8.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro9.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro10.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro11.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    img:'./assets/pro12.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  }];
ReactDOM.render(<App data={product}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
