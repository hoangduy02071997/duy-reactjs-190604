import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header.container";

export default function Layout(props) {
  const {prdIncart, rmProduct} = props
  return (
    <>
      <Header prdIncart={prdIncart} rmProduct={rmProduct} />
      {props.children}
      <Footer />
    </>
  );
}
