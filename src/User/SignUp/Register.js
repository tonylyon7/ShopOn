import React from 'react'
import './Signup style/Register.css'
import img from '../SignUp/Images/register.png'
import img1 from '../SignUp/Images/SHOPON.png'
import {AiFillFacebook, AiFillGoogleCircle} from 'react-icons/ai'
import SignIn from './SignIn'

const Register = () => {
  return (
    <>
        <div className='container-fluid signin'>
            <div className='wrapper signin'>
            <div className='row d-flex'>
            <div className='col-md-1'>
                </div>
                <div className='col-md-5'>
                    <div className='stephimage1'>
                    <img src={img} className='stephfrontimg'/>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className='stephimage2'>
                    <img src={img1}/>
                    </div>
                    <h2 className='registerheading'>Hello Friend!!!</h2>
                    <div className='socialmedia'>
                    <div className='stephsignin'>
                    <a href='www.facebook.com'><AiFillFacebook/>Sign in with facebook</a>
                    </div>
                        <a href='www.google.com'><AiFillGoogleCircle/></a>
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
                   <p className='newmembers'><a href=''>Sign In</a></p>
                    </div>
                </div>
                <div className='col-md-1'>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Register