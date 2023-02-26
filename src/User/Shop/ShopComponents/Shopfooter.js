import React from 'react'
import "../Styles/Shopfooter.css"
import twit from "../Images/twit.svg"
import eff from "../Images/ef.svg"
import gee from "../Images/gee.svg"
import logo from "../Images/SHOPON2.svg"
import ig from "../Images/ig.svg"
import news from "../Images/news.svg"
import visa from "../Images/visa.png"
import master from "../Images/maste.png"
import paypal from "../Images/paypal.png"


const Shopfooter = () => {
  return (
    <footer className='site-footer malsfbg'>
      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <img src={logo}/>
            <p className='malsfa malsfaa mb-0'>Address: 17 Princess Road, London, Greater London NW1 8JR, UK</p>
            <a className='malsfa' href='tel:(0600) 874 548'>Phone: (800) 8001-8588, (0600) 874 548</a><br></br>
            <a href='mailto:info@gmail.com' className='malsfa'>Email: info@gmail.com</a>
            <div className='d-flex malsfimg'>
              <img src={eff}/>
              <img src={gee}/>
              <img src={ig}/>
              <img src={twit}/>
            </div>
          </div>
          <div className='col-3'>
            <p className='malsfulli'>Company</p>
            <div className='malsfullii d-flex'>
              <div>
                <p>About us</p>
                <p>Shop</p>
                <p>Features</p>
                <p>Sale</p>
                <p>Contact</p>
              </div>
              <div className='ms-5'>
                <p>Shipping</p>
                <p>Help</p>
                <p>Privacy Policy</p>
                <p>FAQs</p>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <p className='malsfulli'>Newsletter</p>
            <p className='malsfd3'>Sign up for our Newsletter to get more events, promotions & news from us!</p>
            <div className='d-flex malsfnews ps-3 justify-content-between'>
              <input type="email" placeholder='Enter your email'/>
              <div className='malsfninggg'>
                <img src={news}/>
              </div>
            </div>
          </div>
        </div>
        <hr className='malsfhr'></hr>
        <div className='d-flex justify-content-between'>
          <p className='malsfcr'>Copyright © All rights Reserved</p>
          <div className='malsfpay'>
            <img src={visa}/>
            <img src={master}/>
            <img src={paypal}/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Shopfooter