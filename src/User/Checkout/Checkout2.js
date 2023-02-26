import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './CheckoutCss/checkout2.css'
import check from './CheckoutImages/check.png'
import visa from './CheckoutImages/visa.png'
import stripe from './CheckoutImages/stripe.png'
import master1 from './CheckoutImages/master1.png'
import ApplePay from './CheckoutImages/ApplePay.png'
import paypal from './CheckoutImages/paypal.png'
import Secure from './CheckoutImages/Secure icon.png'
import norton from './CheckoutImages/Norton Icon.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import base from './CheckoutImages/check base.png'
import active from './CheckoutImages/finished to active.png'
import content from './CheckoutImages/Content.png'
import step from './CheckoutImages/_Step icon base.png'
import next from './CheckoutImages/active to next step.png'

const Checkout2 = () => {
  return (
    <div>
      <Navbar/>
      <div className='container align-items-center'>
        <div className='text-center'>
          <h3 className='checkout2'>Preferred payment method</h3>
          <p className='how'>How would you like to make your payment?</p>
        </div>
        <div className='img3'>
          <img src={base}/><img src={active}/><img src={base}/><img src={active}/><img src={content}/><img src={next}/><img src={step}/>
        </div>
        <div className='line3'>
            <p><span className='welcome2'>Welcome</span><span className='ship2'>Shipping method</span><span className='ment2'>Payment</span><span className='ord2'>Order</span></p>
        </div>
        <form>
            <div className='big-box'>
              <h6 className='payment'>Payment method</h6>
              <div className='box1'>
              <div className='d-flex justify-content-between align-items-center top'>
                <img src={check}/>
                <h6 className='pay'>Payment with Credit Card</h6>
                <img  className='me-2' src={visa}/>
                <img className='me-2' src={stripe}/>
                <img className='me-2' src={master1}/>
              </div>
              <div>
                <div className='row1 justify-content-between'>
                  <div className='name'>
                    <h6 className='head6'>Name on card</h6>
                    <div className='input1'>
                      <input type='text' placeholder='Jane doe'></input>
                    </div>
                  </div>
                  <div className='ex'>
                    <h6 className='head61'>Expiry</h6>
                    <div className='input-expiry'>
                      <input type='text' placeholder='06/24'></input>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='row2 justify-content-between'>
                  <div className='card-num'>
                    <h6 className='head7'>Card number</h6>
                    <div className='input2'>
                      <input type='number' placeholder='1234 1234 1234 1234'></input>
                    </div>
                  </div>
                  <div className='cvv'>
                    <h6 className='head7 ms-4'>CVV</h6>
                    <div className='input-cv ms-4'>
                      <input type='password'></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-3 cradio'>
                <input id="radio1" type="radio" name="radio" value="1"></input>
                <label for="radio1" className=' apple'>Apple Pay <span className='image-left'><img src={ApplePay}/></span><br/>
                <span className='apple2'>Unlimited users and unlimited individual data</span></label>
              </div>
              <div className='mt-1 cradio'>
                <input id="radio1" type="radio" name="radio" value="1"></input>
                <label for="radio1" className=' paypal'>Paypal<span className='image-left1'><img src={paypal}/></span> <br/>
                <span className='paypal2'>You will be directed to the Paypal website after submitting your order</span></label>
              </div>
              <p className='protect'><img src={Secure}/>We protect your payment information using encryption to provide bank-level security</p>
              <div className='d-flex justify-content-between align-items-center'>
                <img src={norton}/>
                <Link to='/Checkout1' className='check-back text-black ms-5'><FaArrowLeft className='me-3'/>Back</Link>
                <Link to='/Checkout3' className='check-next text-white ms-5'>Next<FaArrowRight className='ms-3 '/></Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Checkout2