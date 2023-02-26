import React from 'react'
import './Signup style/signin.css'
import img from '../SignUp/Images/signin image.png'
import img1 from '../SignUp/Images/SHOPON.png'
import {AiFillFacebook, AiFillGoogleCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <>
        <div className='container signin'>
            <div className='row'>
              <div className='col-md-2'></div>
              <div className='col-md-8 mt-3 card'>
                <div className='row d-flex'>
                        <div className='col-md-6'>
                            <div className='stephfrontimge'>
                            <img src={img} className='stephimge'/>
                            </div>
                         </div>
                         <div className='col-md-6 ml-5'>
                         <div className='stephcont'>
                                <div className='stephimage2'>
                                <img src={img1}/>
                                 </div>
                               <h2 className='registerheadinge'>Welcome</h2>
                                <div className='socialmedia'>
                                    <div className='stephsignine'>
                                    <a href='www.facebook.com' className='facebook'><AiFillFacebook/>Sign in with facebook</a>
                                    </div>
                                    <div className='stephgo'>
                                    <a href='www.google.com' className='goog'><AiFillGoogleCircle/></a>
                                    </div>
                                </div>
                                <p className='stephor'>or</p>
                                <form>
                                    <div className='email'>
                                    <label className='email'>Your Email</label>
                                    <input type='email' id='email' placeholder='ex:jules@gmail.com '/>
                                    </div>
                                    <div className='password'>
                                    <div className='stephpassworde'>
                                    <label className='passwordee'>Password</label>
                                    <a href='' className='forgotpassworde'> Forgot password?</a>
                                    </div>
                                    <input type='password' id='password'/>
                                    </div>
                                    <button className='stephbuttone'>Sign in</button>
                                </form>
                                <div className='stephmembers'>
                                <p className='newmembere'>New Member?</p>
                                <p className='newmemberse'><Link to='/Register'>Register</Link></p>
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