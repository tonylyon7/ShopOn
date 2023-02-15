import React from 'react'
import './Signup style/Register.css'
import img from '../SignUp/Images/register.png'
import img1 from '../SignUp/Images/SHOPON.png'
import {AiFillFacebook, AiFillGoogleCircle} from 'react-icons/ai'
import SignIn from './SignIn'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <div className='container signin'>

                        <div className='card stephnie'>
                          <div className='d-flex stephcontent'>
                            
                            <div className='stephfrontimg'>
                            <img src={img} className='stephimg'/>
                            </div>
                            
                            <div className='stephcont'>
                                <div className='stephimage2'>
                                <img src={img1}/>
                                 </div>
                            <h2 className='registerheading'>Hello Friend!!!</h2>
                            <div className='socialmedia'>
                                <div className='stephsignin'>
                                <a href='www.facebook.com'><AiFillFacebook/>Sign in with facebook</a>
                                </div>
                                <div className='stephgo'>
                                <a href='www.google.com' className='goog'><AiFillGoogleCircle/></a>
                                </div>
                            </div>
                                <p className='stephor'>or</p>
                            <form>
                                <div className='Username'>
                                <label className='steph username'>Username</label>
                                <input type='text' placeholder='ex:julie'/>
                                </div>
                                <div className='email'>
                                <label className='email'>Your Email</label>
                                <input type='email' id='email' placeholder='ex:jules@gmail.com '/>
                                </div>
                                <div className='password'>
                                <div className='stephpassword'>
                                <label className='passworde'>Password</label>
                                <a href='' className='forgotpassword'> Forgot password?</a>
                                </div>
                                <input type='password' id='password'/>
                                </div>
                                <button className='stephbutton'>Create Account</button>
                            </form>
                            <div className='stephmember'>
                            <p className='newmember'>Already a Member?</p>
                            <p className='newmembers'><Link to='/SignIn'>Sign In</Link></p>
                            </div>
                            </div>
                        </div>
                        </div>
        </div>
    </>
  )
}

export default Register