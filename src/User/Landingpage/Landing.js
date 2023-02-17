import React from 'react'
import SignIn from '../SignUp/SignIn.js'
import Main from './Main.js'
import Nav from './Nav.js'
import Register from '../SignUp/Register.js'
import Footer from './Footer.js'
import SignIn from '../SignUp/SignIn.js'
import './CSS/main.css'
// import SignIn from '../SignUp/SignIn.js'


const Landing = () => {
  return (
    <>
    <Nav/>
    {/* <SignIn/> */}
    <Register/>
    <Main/>
    <Footer/>
    </>
  )
}

export default Landing