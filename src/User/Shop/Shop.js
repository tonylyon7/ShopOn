import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Shopheader from './ShopComponents/Shopheader'
import Shopmain from './ShopComponents/Shopmain'

const Shop = () => {
  return (
    <>
        <Navbar/>
        <Shopheader/>
        <Shopmain/>
        <Footer/>
    </>
  )
}

export default Shop