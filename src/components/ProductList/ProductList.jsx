import React, {useState, useEffect} from "react";
import ProductItems from "../ProductItems/ProductItems";

export default function ProductList(props) {
  const {onAddToCart, getProductList, productList } = props
  // use effect for API 
  useEffect(() => {
    getProductList()
  },[])
  // Get data from Api was got input productShow
  const [productShow, setProductShow] = useState([])
  useEffect(() => {
    setProductShow([...productList])
  },[productList])
  
  //test
  
  // Sort product by Name A-Z
    const sortNameAz = () => {
    const product = [...productShow];
    const newProduct = product.sort((a,b) => {
      if (a.name > b.name){
        return 1;
      }
      if (a.name == b.name){
        return 0;
      }
      if(a.name < b.name){
        return -1;
      }
    })
    setProductShow(newProduct)
  }
  //Sort product by name Z-A
  const sortNameZa = (a,b) => {
    const product = [...productShow];
    const newProduct = product.sort((a,b) => {
      if (a.name > b.name){
        return -1;
      }
      if (a.name == b.name){
        return 0;
      }
      if(a.name < b.name){
        return 1;
      }
    })
    setProductShow(newProduct)
  }
  // Sort Price Low to High
  const sortPriceLowToHigh = () => {
    const product = [...productShow]
    const newProducts = product.sort((a, b) => a.final_price - b.final_price)
    setProductShow(newProducts)
  }
  // Sort Price High to Low
  const sortPriceHighToLow = () => {
    const product = [...productShow]
    const newProducts = product.sort((a, b) => b.final_price - a.final_price)
    setProductShow(newProducts)
  }

  //Sort Product Top Sales
  const sortProductTopSales = () => {
    const product = [...productShow]
    const newProducts = product.filter(elm => {
        return elm.promotion_percent > 40 ;
    })
    setProductShow(newProducts)
  }
  //end

  //search
  const [textChange, setText] = useState("")

  const onTextChange = (event) => {
    console.log(event.target.value)
   setText(event.target.value)
}

const onFormSearch = () => {
  setProductShow(productList.filter(element => {
    if(element.name.includes(textChange)) {
      return element
    }
 }))
 setText("")
}
  
  return (
    <main>
      {/*  <!-- shop-area start --> */}
      <section className="shop-area pt-150 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              {/*  <!-- tab filter --> */}
              <div className="row mb-10">
                <div className="col-xl-5 col-lg-6 col-md-6">
                  <div className="product-showing mb-40">
                    <p>Showing 1–22 of 32 results</p>
                  </div>
                </div>
              </div>
              {/*  <!-- tab content --> */}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    {productShow.map(product => (
                      <ProductItems onAddToCart = {onAddToCart} {...product} />
                    ))
                    }
                  </div>
                </div>
              </div>
            </div>
            {/* <!--SideBar --> */}
            <div className="col-xl-3 col-lg-4">
              <div className="sidebar-shop">
                <div className="shop-widget">
                  <h3 className="shop-title">Search by</h3>
                  <form action="#" className="shop-search" onSubmit={onFormSearch}>
                    <input type="text" placeholder="Your keyword...." onChange={onTextChange} />
                    <button>
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                {/* <!-- 
                        <div className="shop-widget">
                            <h3 className="shop-title">Filter selection</h3>
                            <div className="price-filter">
                                <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;"></span></div>
                                <input type="text" id="amount">
                            </div>
                        </div> --> */}

                <div className="shop-widget">
                  <h3 className="shop-title">SHOP BY</h3>
                  <ul className="shop-link">
                    <li>
                      <a href="#" onClick={sortNameAz}>Name: A-Z</a>
                    </li>
                    <li>
                      <a href="#" onClick={sortNameZa}>Name: Z-A</a>
                    </li>
                    <li>
                      <a href="#" onClick={sortPriceHighToLow}>Price: High to Low</a>
                    </li>
                    <li>
                      <a href="#" onClick={sortPriceLowToHigh}>Price: Low to High</a>
                    </li>
                    <li>
                      <a href="#" onClick = {sortProductTopSales}>Product: Top Sales</a>
                    </li>
                  </ul>
                </div>

                <div className="shop-widget">
                  <h3 className="shop-title">Recent Product</h3>
                  <ul className="shop-sidebar-product">
                    <li>
                      <div className="side-pro-img">
                        <a href="#">
                          <img src="./assets/shop-rsp3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="side-pro-content">
                        <div className="side-pro-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <a href="#">Raglan Baseball-Style</a>
                        </h5>
                        <div className="side-pro-price">
                          <span>$119.00 USD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="side-pro-img">
                        <a href="#">
                          <img src="./assets/shop-rsp2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="side-pro-content">
                        <div className="side-pro-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <a href="#">Raglan Baseball-Style</a>
                        </h5>
                        <div className="side-pro-price">
                          <span>$119.00 USD</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="side-pro-img">
                        <a href="#">
                          <img src="./assets/shop-rsp4.jpg" alt="" />
                        </a>
                      </div>
                      <div className="side-pro-content">
                        <div className="side-pro-rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <a href="#">Raglan Baseball-Style</a>
                        </h5>
                        <div className="side-pro-price">
                          <span>$119.00 USD</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="shop-widget">
                  <div className="shop-sidebar-banner">
                    <a href="#">
                      <img src="./assets/shop-banner.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /SideBar --> */}
          </div>
        </div>
      </section>
      {/* <!-- shop-area end --> */}
    </main>
  );
}
