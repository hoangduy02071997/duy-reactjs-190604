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
  const [selectedItem, setSelectedItem] = useState();
  const [isShowSearchModal, setSearchModal] = useState(true);
  const findSelectedItem = productId => {
    const item = result.data.find(
      item => item.product_id === parseInt(productId, 10)
    );
    setSelectedItem(item);
  };

  const onShowSearch = () => {
    setSearchModal(state => !state);
  };
  const [prdIncart, setPrdInCart] = useState([]);
  const [data, setData] = useState([]);
  // remove PRD inMiniCart
  const rmProduct = (product) => {
    const products = prdIncart.filter(elm => elm.productId !== product.productId)
    setPrdInCart([...prdIncart, product])
  }
  // Sort product by Name A-Z
  const sortNameAz = () => {
    const product = [...data] 
    const newProducts = product.sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
    setData(newProducts)
  }
  //Sort product by name Z-A
  const sortNameZa = () => {
    const product = [...data] 
    const newProducts = product.sort((a,b) => b.name.charCodeAt(0) - a.name.charCodeAt(0))
    setData(newProducts)
  }
  // Sort Price Low to High
  const sortPriceLowToHigh = () => {
    const product = [...data] 
    const newProducts = product.sort((a,b) => a.price - b.price)
    setData(newProducts)
  }
  // Sort Price High to Low
  const sortPriceHighToLow = () => {
    const product = [...data] 
    const newProducts = product.sort((a,b) => b.price - a.price)
    setData(newProducts)
  }

  return (
    <Router>
      
      <Layout onShowSearch={onShowSearch} prdIncart = {prdIncart} rmProduct={rmProduct}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ProductList data={result.data} />}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute
            path="/product-detail/:productId"
            render={propsOfRouter => (
              <ProductDetail
                findSelectedItem={findSelectedItem}
                selectedItem={selectedItem}
                {...propsOfRouter}
              />
            )}
          />
          <PrivateRoute component={NoMatch} />
        </Switch>

        {isShowSearchModal && (
          <div className="search-wrap" onClick={onShowSearch}>
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
