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

const LandingpageNav = () => {
  return (
    <>
      <div className='container'>
        <div className='container-fluid Tony-Nav'>
          <div className='row'> 
            <div className='col-md-9'>
              <ul className='Tonylist-nav'>
                  <li> <FaPlane/> Free delivery over $200</li>
                  <li> <AiFillDollarCircle/> Money back guarantee</li>
                  <li> <FaTag/> Weekly new arrivals</li>
              </ul>
            </div>
            <div className='col-md-3 mr-auto'>
              <ul className='ms-auto Tonylist-nav'>
                  <li>ENG <FaChevronDown/> </li>
                  <li>USD <FaChevronDown/> </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='Tony-head'>
          <div className='first'>
            <div className='create'>
              {/* <a href='/'> <img src={img}/></a> */}
              <div className='second'>
                  {/* <p className='seller'><Link to='/Signup'>create a seller account</Link></p> */}
                  <p>create a seller account</p>
                    <form>
                      <input type="search" className="search" placeholder='   search...'></input>
                  </form>          
              </div>
              </div>
              <div className=' icons col-md-3' >
                <ul className='Tonylist-nav'> 
                  <li><GrFavorite/></li>
                  <li><BsCart2/> 0</li>
                  <li> <BsPerson/> sign in</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingpageNav