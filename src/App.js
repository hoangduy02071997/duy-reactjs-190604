import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NoMatch from  './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App({ data }) {
  const [sp, setSP] = useState(data);
  function sortAZ() {
    const kq = sp.sort((a, b) => {
      if (a.name > b.name)
        return 1;
      if (a.name < b.name)
        return -1;
      if (a.name == b.name)
        return 0;
    })
    setSP(kq);
  }

  function sortZA() {
    const sps = [...sp];
    const kq = sps.sort((a, b) => {
      if (a.name > b.name)
        return -1;
      if (a.name < b.name)
        return 1;
      if (a.name == b.name)
        return 0;
    })
    setSP(kq);
  }

  function sortPriceUp() {
    const sps = [...sp];
    const kq = sps.sort((a, b) => {
      return a.price - b.price;
    })
    setSP(kq);
  }

  function sortPriceDown() {
    const sps = [...sp];
    const kq = sps.sort((a, b) => {
      return b.price - a.price;
    })
    setSP(kq);
  }

  function filterPro() {
    const sps = [...sp];
    const kq = sp.filter((a) => {
      return a.pricePromote >= 50;
    })
  }
  const [prdInCart, setPrdInCart] = useState([]);
  const addToCart = (product) => {
    setPrdInCart([...prdInCart, product]);
  }
  const removePro = (product) => {
    const products = prdInCart.filter(elm => elm.productID !== product.productID);
    setPrdInCart(products);
  }
  return (
    <>
      <Header prdInCart={prdInCart} removePro={removePro} />
      {/*
      <ProductList data={sp} 
        addToCart={addToCart} 
        sortAZ={sortAZ} 
        sortZA={sortZA} 
        sortPriceUp={sortPriceUp} 
        sortPriceDown={sortPriceDown} 
        filterPro={filterPro} 
      />
      */}
      <Router>
      <Switch>
        <Route path='/Login' component={Login} />
        <Route exact path='/' render={()=>(
          <ProductList data={sp} 
          addToCart={addToCart} 
          sortAZ={sortAZ} 
          sortZA={sortZA} 
          sortPriceUp={sortPriceUp} 
          sortPriceDown={sortPriceDown} 
          filterPro={filterPro} 
        />
        )}/>
        <Route path='/ProductDetail/:id' component={ProductDetail}/>
        <Route component={NoMatch}/>
        </Switch>
      </Router>

      <Footer />

    </>
  )
}


export default App;