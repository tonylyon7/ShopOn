import React from 'react'
import Oproducts from './Scomp/Oproducts'
import Emptycart from './Scomp/Emptycart'
import Shopfooter from '../Shop/ShopComponents/Shopfooter'
import Shopnavbar from '../Shop/ShopComponents/Shopnavbar'


const Emptyshoppingcart = () => {
  return (
    <>
        <Shopnavbar/>
        <Emptycart/>
        <Oproducts/>
        <Shopfooter/>
    </>
  )
}

export default Emptyshoppingcart