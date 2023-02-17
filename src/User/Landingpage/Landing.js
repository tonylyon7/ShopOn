import React from 'react'
import Main from './Main.js'
import Nav from './Nav.js'
import Footer from './Footer.js'
import SignIn from '../SignUp/SignIn.js'
import './CSS/main.css'
// import SignIn from '../SignUp/SignIn.js'


const Landing = () => {
  return (
    <>
    <Nav/>
    {/* <SignIn className='landing-sign'/> */}
    <Main/>
    <Footer/>
    </>
  )
}

export default Landing