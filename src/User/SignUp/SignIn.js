import React from 'react'
import './Signup style/signin.css'
import img from '../SignUp/Images/signin image.png'
import img1 from '../SignUp/Images/SHOPON.png'
import {AiFillFacebook, AiFillGoogleCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
        <div className='container-fluid signin'>
           <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div className='row d-flex'>
                        <div className='col-md-6'>
                        <div className='stephfrontimg'>
                            <img src={img}/>
                        </div>
                       
                        <div className='col-md-6'>
                        <div className='stephcon'>
                        <div className='stephimage2'>
                            <img src={img1}/>
                        </div>
                        <h2 className='registerheading'>Welcome Back</h2>
                    <div className='socialmedia'>
                    <div className='stephsignin'>
                    <a href='www.facebook.com'><AiFillFacebook/>Sign in with facebook</a>
                    </div>
                       <div className='googl mt-3 ml-4'>
                       <a href='www.google.com'className='ml-4'><AiFillGoogleCircle/></a>
                       </div>
                    </div>
                    <p className='stephor'>or</p>
                    <form>
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
                        <button className='stephbutton'>SignIn</button>
                    </form>
                    <div className='stephmember'>
                    <p className='newmember'>New Member?</p>
                    <Link to='/Register' className='newmembers'>Register Now</Link>
                    </div>
                        </div>
                    
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'></div>
           </div>
        </div>
    </>
  )
}

export default SignIn