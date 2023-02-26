import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Shopfooter from '../Shop/ShopComponents/Shopfooter'
import Shopnavbar from '../Shop/ShopComponents/Shopnavbar'
import Oproducts from './Scomp/Oproducts'
import Scart from './Scomp/Scart'

const Shopingcart = () => {
  return (
    <>
        <Navbar/>
        <Scart/>
        <Oproducts/>
        <Footer/>
    </>
  )
}

export default Shopingcart