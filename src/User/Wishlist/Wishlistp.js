import React from 'react'
import Shopfooter from '../Shop/ShopComponents/Shopfooter'
import Shopnavbar from '../Shop/ShopComponents/Shopnavbar'
import Oproducts from '../Shoppingcart/Scomp/Oproducts'
import Wishlist from '../Shoppingcart/Scomp/Wishlist'

const Wishlistp = () => {
  return (
    <>
        <Shopnavbar/>
        <Wishlist/>
        <Oproducts/>
        <Shopfooter/>
    </>
  )
}

export default Wishlistp