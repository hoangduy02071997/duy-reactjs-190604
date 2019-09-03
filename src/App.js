import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import ProductList from './components/ProductList/ProductList';

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
