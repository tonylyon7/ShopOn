import React from 'react'
import logo from './Assets/SHOPON.png'
import './CSS/Footer.css'
import {GrFacebookOption, GrGoogle} from 'react-icons/gr'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <>
        <div className='tony-last mt-5'>
            <div className='container'>
                <div className="pt-4 d-flex justify-content-center" >
                    <img src={logo} />
                </div>
                <div className='py-sm-4 text-center ps-4 ms-md-5 lorem'>
                    Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut erroribus, ad nonumy vituperata mei.
                    Et qui falli latine consequutur. In appellantur concludaturque pro. Commune scriptorem ad pri, ut euripidis
                    posidonium has. Eum ei verear dolorum. Duo quas viris delenit cu, dolores inciderint scribentur mel in.
                </div>
                <div className='gap-lg-3 d-flex justify-content-center landing-social'>
                    <a href='https://facebook.com' target='_blank'><GrFacebookOption className='kinging'/></a>
                    <a href='https://facebook.com' target='_blank'><GrGoogle className='kinging'/></a>
                    <a href='https://facebook.com' target='_blank'><RiInstagramFill className='kinging'/></a>                                          
                </div>
                <div className='line'></div>

                <div className='footernav pt-3 d-flex justify-content-center '>
                    <ul className='footernav list-unstyled d-flex gap-sm-5'>
                        <li><a href='' className='text-decoration-none text-dark'>About Us</a></li>
                        <li><a href='' className='text-decoration-none text-dark'>Contact Us</a></li>
                        <li><a href='' className='text-decoration-none text-dark'>My Account</a></li>
                        <li><a href='' className='text-decoration-none text-dark'>Store Location</a></li>
                        <li><a href='' className='text-decoration-none text-dark'>Search Terms</a></li>
                    </ul>
                </div>

                <div className='pt-3 d-flex justify-content-center'>
                    <ul className='footernav list-unstyled d-flex gap-lg-5'>
                        <li><a href='' className='text-decoration-none text-dark'>Help & FAQs</a></li>
                        <li><a href='' className='text-decoration-none text-dark'>Gift Cards</a></li>
                        <li><a href='' className='text-decoration-none text-dark'>Shipping & Delivery</a></li>
                        <li><a href='' className='text-decoration-none text-dark'>Refund Policy</a></li>
                    </ul>
                </div>
                <div className='d-flex justify-content-center pb-4 mt-3'>&copy; All rights Reserved</div>
            </div>
        </div>
    </>
  )
}

export default Footer