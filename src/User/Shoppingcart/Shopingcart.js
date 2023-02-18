import React from 'react'
import Shopfooter from '../Shop/ShopComponents/Shopfooter'
import Shopnavbar from '../Shop/ShopComponents/Shopnavbar'
import Oproducts from './Scomp/Oproducts'
import Scart from './Scomp/Scart'

const Shopingcart = () => {
  return (
    <>
        <Shopnavbar/>
        <Scart/>
        <Oproducts/>
        <Shopfooter/>
    </>
  )
}

export default Shopingcart