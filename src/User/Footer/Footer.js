import React from 'react'
import './Footer.css'
import logo  from './Assets/SHOPON (1).png';
import facebook from './Assets/Vector1.png'
import Google from './Assets/Vector (1).png'
import insta from './Assets/Subtract.png'
import twitter from './Assets/Vector (2).png'
import vector from './Assets/Vector.png'
import visa from './Assets/Visa.png'
import master from './Assets/MasterCard.png'
import paypal from './Assets/PayPal.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-bg text-white mt-4'>
      <div className='container pt-5'>
        <div className='footer-page'>
          <div className=''>
              <img src={logo}/>
              <p className='mt-5'>Address: 17 Princess Road, London, Greater London NW1 8JR, UK</p>
              <p>Phone: (800) 8001-8588, (0600) 874 548</p>
              <p>Email: info@gmail.com</p>
              <div className='footer-social'>
                <a href='' target='_blank'><img src={facebook} /></a>
                <a href='' target='_blank'><img src={Google} /></a>
                <a href='' target='_blank'><img src={insta} /></a>
                <a href='' target='_blank'><img src={twitter} /></a>
              </div>
          </div>
          <div className='footer-company mt-4'>
            <h4>Company</h4>
            <div className='d-flex mt-4'>
              <div>
                <p><Link to='/About' className='text-decoration-none text-white'>About Us</Link></p>
                <p><Link to='/Shop' className='text-decoration-none text-white'>Shop</Link></p>
                <p><Link to='/' className='text-decoration-none text-white'>Features</Link></p>
                <p><Link to='/' className='text-decoration-none text-white'>Sale</Link></p>
                <p><Link to='/Contact' className='text-decoration-none text-white'>Contact</Link></p>
              </div>
              <div className='ms-5'>
                <p><Link to='/' className='text-decoration-none text-white'>Shipping</Link></p>
                <p><Link to='/' className='text-decoration-none text-white'>Help</Link></p>
                <p><Link to='/' className='text-decoration-none text-white'>Privacy Policy</Link></p>
                <p><Link to='/FAQ' className='text-decoration-none text-white'>FAQs</Link></p>
              </div>
            </div>
          </div>
          <div className='footer-news mt-4'>
            <h4>Newsletter</h4>
            <p className='mt-4'>Sign up for our Newsletter to get more events, promotions & news from us!</p>
            <form>
            <input type='email' placeholder='Enter your email' className='footer-newsletter' required/>
            <button type='submit' className='foot-btn'>
               <img src={vector} className='foot-new-img'/>
            </button>
            </form>
          </div>
        </div>
        <hr className='footer-hr mt-4'/>
        <div className='d-sm-flex justify-content-between '>
          <p className='mt-3'>Copyright © All rights Reserved</p>
          <div className='footer-card'>
            <img src={visa} />
            <img src={master} />
            <img src={paypal} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer