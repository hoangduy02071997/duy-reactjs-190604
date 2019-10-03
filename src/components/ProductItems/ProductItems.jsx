import React from "react";
import {Link} from 'react-router-dom'


export default function ProductItem(props) {
  const {onAddToCart, product} = props
  console.log(onAddToCart)
  const AddToCart = ()=>{
    //console.log(product,'ksksk')
    onAddToCart(product)
  }
  return (  
    <div className="col-xl-4 col-lg-6 col-md-6">
    <div className="product-wrapper mb-50">
      <div className="product-img mb-25">
        <Link to={`product-detail/${product.product_id}`}>
          <img src={product.img_url} alt=""/>
          <img className="secondary-img" src={product.img_url_mops} alt=""/>
        </Link>
        <div className="product-action text-center">
          <a href="#" title="Shoppingb Cart" onClick={AddToCart}>
            <i className="fas fa-shopping-cart" />
          </a>
          <Link to={`product-detail/${product.product_id}`}>
            <i className="fas fa-search" />
          </Link>
        </div>
      </div>
      <div className="product-content pr-0">
        <div className="pro-cat mb-10">
          <a href="#">{product.shop}</a>
        </div>
        <h4>
          <a href="#">{product.name}</a>
        </h4>
        <div className="product-meta">
          <div className="pro-price">
            <span>{product.final_price} $</span>
            <span className="old-price">{product.price} $</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}