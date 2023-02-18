import React from 'react'
import Shopfooter from './ShopComponents/Shopfooter'
import Shopheader from './ShopComponents/Shopheader'
import Shopmain from './ShopComponents/Shopmain'
import Shopnavbar from './ShopComponents/Shopnavbar'

const Shop = () => {
  return (
    <>
        <Shopnavbar/>
        <Shopheader/>
        <Shopmain/>
        <Shopfooter/>
    </>
  )
}

export default Shop