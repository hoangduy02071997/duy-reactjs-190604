import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header.container";

export default function Layout(props) {
  const {prdIncart, rmProduct, onAddToCart} = props
  console.log(prdIncart, 'prdIncart')
  return (
    <>
      <Header prdIncart={prdIncart} rmProduct={rmProduct} onAddToCart={onAddToCart} />
      {props.children}
      <Footer />
    </>
  );
}
