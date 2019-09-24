import React from "react";
import {Link} from 'react-router-dom'


export default function ProductItem(props) {
  const onAddItemToCart = ()=>{
    props.addItem(props)
  }
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
    <div className="product-wrapper mb-50">
      <div className="product-img mb-25">
        <Link to={`product-detail/${props.product_id}`}>
          <img src={props.img_url} alt=""/>
          <img className="secondary-img" src="./assets/pro4.jpg" alt=""/>
        </Link>
        <div className="product-action text-center">
          <a href="#" title="Shoppingb Cart" onClick={onAddItemToCart}>
            <i className="fas fa-shopping-cart" />
          </a>
          <Link to={`product-detail/${props.product_id}`}>
            <i className="fas fa-search" />
          </Link>
        </div>
      </div>
      <div className="product-content pr-0">
        <div className="pro-cat mb-10">
          <a href="#">{props.shop}</a>
        </div>
        <h4>
          <a href="#">{props.name}</a>
        </h4>
        <div className="product-meta">
          <div className="pro-price">
            <span>{props.price} USD</span>
            <span className="old-price">{props.pricePromoted} USD</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}