import React from 'react'
import SignIn from '../SignUp/SignIn.js'
import Main from './Main.js'
import Nav from './Nav.js'
import Register from '../SignUp/Register.js'


const Landing = () => {
  return (
    <>
    <Nav/>
    {/* <SignIn/> */}
    <Register/>
    <Main/>
    </>
  )
}

export default Landing