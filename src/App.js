import React, {setState} from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Login from './components/Login/Login';

function App(product) {
  return (
    <>
      <Header />
      {/*<ProductList data={product} />*/}
      <Login />
      <Footer />
    </>
  )
}

export default App;
