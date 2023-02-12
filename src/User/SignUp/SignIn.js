import React from 'react'
import './Signup style/signin.css'
import img from '../SignUp/Images/signin image.png'
import img1 from '../SignUp/Images/SHOPON.png'
import {AiFillFacebook, AiFillGoogleCircle} from 'react-icons/ai'

const SignIn = () => {
  return (
    <>
        <div className='container-fluid signin'>
            <div className='wrapper signin'>
            <div className='row d-flex'>
                <div className='col-md-6'>
                    <div className='stephimage1'>
                    <img src={img} className='stephfrontimg'/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='stephimage2'>
                    <img src={img1}/>
                    </div>
                    <h2 className='registerheading'>Welcome Back</h2>
                    <div className='socialmedia'>
                    <div className='stephsignin'>
                    <a href='www.facebook.com'><AiFillFacebook/>Sign in with facebook</a>
                    </div>
                        <a href='www.google.com'><AiFillGoogleCircle/></a>
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
                    <a href='' className='newmembers'>Register Now</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default SignIn