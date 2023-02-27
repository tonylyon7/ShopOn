import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import norton from './CheckoutImages/Norton Icon.png'
import './CheckoutCss/checkout1.css'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import base from './CheckoutImages/check base.png'
import active from './CheckoutImages/finished to active.png'
import content from './CheckoutImages/Content.png'
import step from './CheckoutImages/_Step icon base.png'
import next from './CheckoutImages/active to next step.png'

const Checkout1 = () => {
  return (
    <div>
        <Navbar/>
        <div className='container align-items-center'>
            <div className='text-center'>
                <h3 className='header1'>How should we send the order?</h3>
                <p className='choose'>Choose your favorite shipping method</p>
            </div>
            <div className='img2'>
                    <img src={base}/><img src={active}/><img src={content}/><img src={next}/><img src={step}/><img src={next}/><img src={step}/>
            </div>
            <div className='line2'>
                    <p><span className='welcome1'>Welcome</span><span className='ship1'>Shipping method</span><span className='ment1'>Payment</span><span className='ord1'>Order</span></p>
            </div>
            <div className='box2'>
                <h6 className='method'>Shipping method</h6>
                <form>
                    <div className='d-flex mt-1 radio1'>
                        <input id="radio1" type="radio" name="radio" value="1"></input>
                        <label for="radio1" className='rad1 ms-3'>$36.99 UPS<br/>
                         UPS 1st class dispatch express with Tracking<br/>
                         (2-10 hours)</label>
                    </div>
                    <div className='d-flex mt-3 radio2'>
                        <input id="radio1" type="radio" name="radio" value="1"></input>
                        <label for="radio1" className='rad2 ms-3'>$12.99 DHL<br/>
                         Business Parcell regular with Tracking<br/>
                         (1-3 days)</label>
                    </div>
                    <div className='mt-5 d-flex justify-content-between align-items-center'>
                        <img src={norton}/>
                        <Link to='/Checkout' className='check-back text-black'><FaArrowLeft className='me-3'/>Back</Link>
                        <Link to='/Checkout2' className='check-next text-white'>Next<FaArrowRight className='ms-3 '/></Link>
                    </div>
                </form>
            </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Checkout1