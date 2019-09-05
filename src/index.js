import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const product = [{
    productID: 1,
    img:'./assets/pro1.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    productID: 2,
    img:'./assets/pro2.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    productID: 3,
    img:'./assets/pro3.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  { 
    productID: 4,
    img:'./assets/pro4.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    productID: 5,
    img:'./assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },{
    productID: 6,
    img:'./assets/pro6.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    productID: 7,
    img:'./assets/pro7.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    productID: 8,
    img:'./assets/pro8.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    productID: 9,
    img:'./assets/pro9.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    productID: 10,
    img:'./assets/pro10.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    productID: 11,
    img:'./assets/pro11.jpg',
    imgHover: './assets/pro5.jpg',
    name:'Product-Text',
    cat:'Minimal Deco Furniture',
    price:'100'
  },
  {
    productID: 12,
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
