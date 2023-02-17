import React from 'react'
import Main from './Main.js'
import Nav from './Nav.js'
import './CSS/main.css'


const Landing = () => {
  return (
    <>
    <Nav/>
    <SignIn className='landing-sign'/>
    <Main/>
    <Footer/>
    </>
  )
}

export default Landing