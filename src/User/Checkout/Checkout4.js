import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Vector from './CheckoutImages/Vector.png'
import './CheckoutCss/checkout4.css'
import base from './CheckoutImages/check base.png'
import active from './CheckoutImages/finished to active.png'
import content from './CheckoutImages/Content.png'
import checkicon from './CheckoutImages/Check icon.png'
import thankyou from './CheckoutImages/Thank you.png'
import Icon from './CheckoutImages/Icon.png'

const Checkout4 = () => {
  return (
    <div>
        <Navbar/>
        <div className='container align-items-center'>
            <div className='text-center'>
              <h3 className='confirm'>Confirm and enjoy your order 🎉 </h3>
              <p className='review'>Review your order and confirm it's good to go</p>
            </div>
            <div className='img5'>
              <img src={base}/><img src={active}/><img src={base}/><img src={active}/><img src={base}/><img src={active}/><img src={content}/>
            </div>
            <div className='line5'>
              <p><span className='welcome4'>Welcome</span><span className='ship4'>Shipping method</span><span className='ment4'>Payment</span><span className='ord4'>Order</span></p>
            </div>
            <div className='vector'>
              <img src={Vector}/>
            </div>
        </div>


        <div>
          <div className='text-center'>
            <h3 className='success'>Order successful </h3>
            <p className='placed'>You have successfully placed an order</p>
          </div>
          <div className='suc-box'>
            <div className='checkicon'>
              <img src={checkicon}/>
            </div>
            <h6 className='shopname'>Shop Name</h6>
            <div className='thankyou'>
              <img src={thankyou}/>
            </div>
            <h6 className='lot'>Thanks a lot for putting up this order</h6>
            <p className='track'>Your order <span className='soair'> SOAIRSHOPON2435</span> has successfully been placed. You’ll find all the details about your order below, 
              and we’ll send you a shipping confrimation email as soon as your order ships. In the meantime, you can track your order.</p>
            <div className='order-block'>
              <h6 className='order-review'>Order Review <span className='dropdown11'><img src={Icon}/></span></h6>
              <p className='fourteen'>14 items in cart <span className='price11'>$ 30.12</span></p>
            </div>
            <div>
              <div className='order-block2'>
                <h4>Customer Information</h4>
                <div className='row'>
                </div>
              </div>
              
            </div>
          </div>
         
        </div>
        <Footer/>
    </div>
  )
}

export default Checkout4