import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './CheckoutCss/checkout3.css'
import Icon from './CheckoutImages/Icon.png'
import norton from './CheckoutImages/Norton Icon.png' 
import base from './CheckoutImages/check base.png'
import active from './CheckoutImages/finished to active.png'
import content from './CheckoutImages/Content.png'

const Checkout3 = () => {
  return (
    <div>
        <Navbar/>
        <div className='container align-items-center'>
            <div className='text-center'>
                <h3 className='confirm'>Confirm and enjoy your order 🎉</h3>
                <p className='review'>Review your order and confirm it's good to go</p>
            </div>
            <div className='img4'>
                <img src={base}/><img src={active}/><img src={base}/><img src={active}/><img src={base}/><img src={active}/><img src={content}/>
            </div>
            <div className='line4'>
                <p><span className='welcome3'>Welcome</span><span className='ship3'>Shipping method</span><span className='ment3'>Payment</span><span className='ord3'>Order</span></p>
            </div>
            <div className='main-box '>
                <div className='block1'>
                    <h6 className='order'>Order Review <span className='dropdown'><img src={Icon}/></span></h6>
                    <p className='four'>4 items in cart <span className='price'>$ 12,042.00</span></p>
                </div>
                <div className='block2'>
                    <p className='dispatch'>$36.99 UPS<br/>
                    USPS 1st Class dispatch express with Tracking<br/>
                    (2 - 10 hours)</p>
                </div>
                <div className='block3'>
                    <h6 className='summary'>Check out Summary <span className='dropdown1'><img src={Icon}/></span></h6>
                    <div className='table'>
                        <p className='table1'>Subtotal <span className='prices'>$ 5.51</span><br/>
                         Discount <span className='prices'>$ 14.47</span><br/>
                         Extra Fee <span className='prices'>$ 8.12</span><br/>
                         Shipping<span className='prices'>$ 2.02</span></p>
                        <hr width='510.21px'></hr>
                    </div>
                    <h6 className='total'>Total <span className='total1'>$ 12,072.12</span></h6>
                </div>
                <div className='d-flex align-items-center checkout-account'>
                    <input type='checkbox'/>
                    <p className='ms-1 mt-3 ack'>Please check to acknowledge our <span className='privacy'>Privacy & Terms Policy</span></p>
                </div>
                <Link to='/Checkout4' className='d-flex justify-content-center align-items-center checkout-buy text-center text-decoration-none text-white'>Buy $30.12</Link>
                <div className='image'>
                    <img src={norton}/>
                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default Checkout3