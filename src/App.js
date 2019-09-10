import React, {useState} from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Login from './components/Login/Login';

const [sp, setSP] = useState(dssp);
function sortAZ(sp){
  const kq = sp.sort((a,b)=>{
    if (a.name > b.name)
    return 1;
    if(a.name<b.name)
    return -1;
    if(a.name=b.name)
    return 0;
  })
}

function sortZA(){
  const sps= [...sp];
  const kq = sps.sort((a,b)=>{
    if (a.name > b.name)
    return -1;
    if(a.name<b.name)
    return 1;
    if(a.name=b.name)
    return 0;
  })

}

function sortPriceUp(){
  const sps = [...sp];
  const kq = sps.sort((a,b)=>{
    return a.price - b.price;
  })

}

function sortPriceDown(){
  const sps = [...sp],
  const kq = sps.sort((a,b)=>{
    return b.price - a.price;
  })
}

function filterPro(){
  const sps = [...sp];
  const kq = sp.filter((a)=>{
    return a.pricePromote >= 50;
  })
function App() {
  const [prdInCart, setPrdInCart] = useState([]);
  const addToCart = (product) =>{
    setPrdInCart([...prdInCart, product]);
  }
  const removePro = (product)   =>{
    const products = prdInCart.filter(elm => elm.productID !== product.productID);
    setPrdInCart(products);
  }
  return (
    <>
      <Header prdInCart={prdInCart}  removePro={removePro}/>
      <ProductList data={sp} 
        addToCart={addToCart} 
        sortAZ={sortAZ} sortZA={sortZA} 
        sortPriceUp={sortPriceUp} 
        sortPriceDown={sortPriceDown} 
        filterPro={filterPro} 
      />
      <Footer />
    </>
  )
}

export default App;
