import React, { useState } from "react";
import "./App.css";
import getProduct from './components/ProductList/ProductList.action'
import result from './data.json'
import Layout from "./components/Layout";
import ProductList from "./components/ProductList/ProductList.container";
import Login from "./components/Login/Login";
import Register from "./components/Register/index";
import NoMatch from "./components/NoMatch/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import PrivateRoute from "./components/PrivateRoute/index";

function App() {
  const [productList, setProductList] = useState([])
 
  const [prdIncart, setPrdInCart] = useState([]);
  //Get API to use 
  function getProductList() {
    fetch("https://mapi.sendo.vn/mob/product/cat/ao-so-mi-nam?p=1")
    .then(result => result.json())
    .then(products => {
      console.log(products)
        setProductList(products.data)
    })
  }

  // Add to Cart
  const onAddToCart = (product) => {
    setPrdInCart([...prdIncart, product])
  }
 
  // remove PRD inMiniCart
  const rmProduct = (product) => {
    const products = prdIncart.filter(elm => elm.productId !== product.productId)
    setPrdInCart([...prdIncart, products])
  }
  

  return (
    <Router>

      <Layout  prdIncart={prdIncart} rmProduct={rmProduct}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ProductList getProductList={getProductList} productList={productList}
              onAddToCart = {onAddToCart}
            />}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute
            path="/product-detail/:productId"
            render={propsOfRouter => (
              <ProductDetail
                productList = {productList}
                {...propsOfRouter}
              />
            )}
          />
          <PrivateRoute component={NoMatch} />
        </Switch>

        {(
          <div className="search-wrap">
            <div className="search-inner">
              <i className="fas fa-times search-close" id="search-close" />
              <div className="search-cell">
                <form method="get">
                  <div className="search-field-holder">
                    <input
                      type="search"
                      className="main-search-input"
                      placeholder="Search Entire Store..."
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </Router>
  );
}

export default App;
