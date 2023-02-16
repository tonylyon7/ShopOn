import React from 'react'
import empty from "../Images/empty.png"

const Emptycart = () => {
  return (
    <>
      <div className='text-center pb-5'>
        <img src={empty}/>
        <p className='mt-1 mb-3' style={{fontWeight:"500"}}>Your shopping cart is empty</p>
        <button className='rounded-pill border' style={{width:"265px",backgroundColor:"#E9672B",fontSize:"9px",color:"white",height:"33px"}}>Continue Shopping</button>
      </div>
    </>
  )
}

export default Emptycart