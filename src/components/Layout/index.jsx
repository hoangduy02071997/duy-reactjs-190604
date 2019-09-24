 
import React from 'react'
import Footer from '../Footer';
import Header from '../Header/Header.container';

export default function Layout(props) {
  return (
    <>
      <Header {...props}/>
        {props.children}
      <Footer />
    </>
  )
}