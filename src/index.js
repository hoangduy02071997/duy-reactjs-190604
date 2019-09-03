import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const product = [
    {
        name: 'Iphone XS',
        imgURL:"https://media3.scdn.vn/img3/2019/5_16/dqj5p5_simg_b5529c_250x250_maxb.jpg",
        price:'$980'
    },
    {
        name: 'Xiaomi',
        imgURL:"https://media3.scdn.vn/img3/2019/8_22/NOxTKT_simg_b5529c_250x250_maxb.jpg",
        price:'$480'
    },
    {
        name: 'Iphone XS',
        imgURL:"https://media3.scdn.vn/img3/2019/5_16/dqj5p5_simg_b5529c_250x250_maxb.jpg",
        price:'$980'
    }
  ]
ReactDOM.render(<App data={product}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
