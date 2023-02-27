import React from 'react'
import '../../Styles/Vendor/Dashboard.css'
import {HiBell} from 'react-icons/hi'
import {MdImage} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'
import Sidenav from '../dashboard/Sidenav'
import Landing from './Landing'

const Topnav = () => {
  return (
    <>
        <Sidenav/>
        <div className='topnav-container'>
            <div className='menu'>
                <div className='dashboard'>
                    Dashboard
                </div>
                <div className='profile'>
                    <select className='select'>
                        <option>TEE Gadgets</option>
                        <option>Others</option>
                        <option>Others</option>
                        <option>Others</option>
                        <option>Others</option>
                        <option>Others</option>
                    </select>
                        <HiBell className='bell'/>
                        <div className='profile-img'>
                            <MdImage className='image'/>
                        </div>
                </div>
            </div>
            <div className='home-icon'>
            <AiOutlineHome/>
            </div>
        </div>
        <Landing/>
    </>
  )
}

export default Topnav