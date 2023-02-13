import React from 'react'
import "./CSS/Nav.css"
import { Link } from 'react-router-dom'
import { FaPlane } from 'react-icons/fa'
import { AiFillDollarCircle } from 'react-icons/ai'
import { FaTag } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import {GrFavorite} from 'react-icons/gr'
import {BsCart2} from 'react-icons/bs'
import {BsPerson} from 'react-icons/bs'
import logo from './Assets/SHOPON.png'
import { FaSearch } from 'react-icons/fa'

const Nav = () => {
  return (
    <>
      <div>
        <div className='Tony-Nav'>
        <div className='container'>
          <div className='row'> 
            <div className='col-md-9'>
              <ul className='Tonylist-nav d-sm-flex align-items-center list-unstyled'>
                  <li> <FaPlane/> Free delivery over $200</li>
                  <li> <AiFillDollarCircle/> Money back guarantee</li>
                  <li> <FaTag/> Weekly new arrivals</li>
              </ul>
            </div>
            <div className='col-md-3 mr-auto'>
              <ul className='ms-auto Tonylist-nav d-sm-flex list-unstyled'>
                  <li>ENG <FaChevronDown/> </li>
                  <li>USD <FaChevronDown/> </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        <div className='container'>
        <div className='Tony-head'>
          <div className='first d-sm-flex justify-content-between'>
            <div className='create d-sm-flex justify-content-between mt-3'>
              <a href='/'><img src={logo} className='mt-2'/></a>
              <div className='second d-sm-flex align-items-center justify-content-between ms-5'>
                  <p className='mt-3 Tony-seller'><Link to='' className='text-decoration-none text-dark'>create a seller account</Link></p>
                    <form className='ms-3'>
                      <input className="search" placeholder='   search...'></input>
                      <FaSearch className='Tony-search'/>
                  </form>          
              </div>
              </div>
              <div className=' icons col-md-3'>
                <ul className='Tonylist-nav d-sm-flex align-items-center list-unstyled mt-3'> 
                  <li><Link to='/Wishlist'><GrFavorite/></Link></li>
                  <li><Link to='/Shopingcart' className='text-decoration-none text-dark'><BsCart2/> 0</Link></li>
                  <li><Link to='/Register' className='text-decoration-none text-dark'><BsPerson/> sign in</Link></li>
                  </ul>
              </div>
          </div>
        </div>

        <div className='Tony-main-nav d-sm-flex justify-content-between'>
          <div className='Tony-main mt-4'>
           <ul className='d-sm-flex list-unstyled'>
            <li><Link to='/' className='text-dark'>Home</Link></li>
            <li><Link to=''>Shop</Link></li>
            <li><Link to='/Blog'>Blog</Link></li>
            <li><Link to=''>Contact</Link></li>
            <li><Link to='/About'>About Us</Link></li>
            <li><Link to='/'>Sale</Link></li>
           </ul>
           </div>
           <div className='mt-4'>
              <p className='Tony-extra'>Extra 20% off save items + Free shipping for orders over $200</p>
           </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Nav