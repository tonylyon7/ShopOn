import React from "react"
import {GrFavorite} from "react-icons/gr"
import {Link, useLocation} from "react-router-dom"
import {BsCart2} from "react-icons/bs"
import {BsPerson} from "react-icons/bs"
import img from "../Landingpage/Assets/SHOPON.png"
import "../Navbar/Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  const location = useLocation()
  console.log(location)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand" href="#">
          <Link to="/" >
            <img src={img} />
          </Link>
          </a>
          <div className=" ml-auto d-flex">
            <div
              className=" navhead collapse navbar-collapse pl-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/" className="nav-link ">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/Shop' className="nav-link" href="#">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/Blog' className="nav-link" href="#">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="active text-danger nav-link " href="#">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            {/* <button className="navbar-toggler" 
                   onClick={ () => { this.setState({show: !this.state.show}) }}>
                   {this.state.show ? <FaBars/> : <FaTimes/>}
                </button> */}
            {location.pathname == "/ErrorPage" ? (
              <div className=" icons">
                <ul className="">
                  <li>
                  <Link to='/Wishlist' ><GrFavorite /></Link>
                  </li>
                  <li>
                    {" "}
                    <BsPerson />
                  </li>
                  <li>
                    <Link to='/Shoppingcart' className="text-decoration-none text-dark"><BsCart2 />0</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className=" icons">
                <ul className="">
                  <li>
                    <Link to='/Wishlist' ><GrFavorite /></Link>
                  </li>
                  <li>
                    {" "}
                    <BsPerson />
                  </li>
                  <li>
                    <Link to='/Shoppingcart' className="text-decoration-none text-dark"><BsCart2 className="text-decoration-none"/>0</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
