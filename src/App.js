import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import ProductList from './components/ProductList/ProductList';
const dssp = [{
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
  img:'./assets/pro1.jpg',
  name:'Product-Text',
  cat:'Minimal Deco Furniture',
  price:'100'
}]
function App(props) {
  return (
    <>
      <Header />
      <ProductList data={props.data} />
      <Footer />
    </>
  )
}

export default App;
