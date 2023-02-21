import React from 'react'
import logo from "../Images/SHOPON.svg"
import search from "../Images/search2.svg"
import heart from "../Images/heart.svg"
import cart from "../Images/cart.svg"
import user from "../Images/user.svg"
import "../Styles/Shopnav.css"

const Shopnavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light malnav">
        <div className="container ">
          <a className="navbar-brand" href=""><img src={logo} className="mallogo"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse kkkk" id="mynavbar">
            <ul className="navbar-nav justify-content-center ms-auto malul">
              <li className="nav-item">
              <a className="nav-link" href=""><p className=''>Home</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><p className='malshop'>Shop<hr style={{height: "1.5px"}}></hr></p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><p>Blog</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><p>Contact</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><p>About Us</p></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><p className='malsale'>Sale</p></a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="malbor" type="text"/>
              <a><img className='malsnimg' src={search}/></a>
            </form>
            <div>
              <a><img className='malsnimg' src={heart}/></a>
              <a><img className='malsnimg' src={user}/></a>
              <a><img className='malsnimg' src={cart}/><span className="badge malbadge">0</span></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Shopnavbar