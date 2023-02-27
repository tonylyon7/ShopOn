import React from 'react'
import '../../Styles/Vendor/Dashboard.css'
import {RiMenuFoldLine} from 'react-icons/ri'
import {RiDashboardFill} from 'react-icons/ri'
import {IoMdContacts} from 'react-icons/io'
import {MdOutlineInventory2} from 'react-icons/md'
import {TbMessageCircle} from 'react-icons/tb'
import {TbCurrencyDollar, TbLogout} from 'react-icons/tb'
import {FiSettings} from 'react-icons/fi'
import {BiSupport} from 'react-icons/bi'
import {MdOutlineShoppingBag} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Images/SHOPON.png'

const Sidebar = () => {
  return (
    <>
        <div className='sidebar-container'>
            <div className='wrapper'>
                <div className='logo'>
                   <img src={Logo}/>
                </div>
                <div className='menu-icon'>
                <RiMenuFoldLine/>
                </div>
                <div className='dashboard-icon'>
                    <RiDashboardFill className='dashfill'/><div className='dash'>Dashboard</div>
                </div>
                <div className='order-icon'>
                    <MdOutlineShoppingBag className='order'/><span>Orders</span>
                </div>
                <div className='customer-icon'>
                    <IoMdContacts className='customer'/><span>Customers</span>
                </div>
                <div className='inventory-icon'>
                   <Link to='/InventoryNav'><MdOutlineInventory2 className='inventory'/><span>Inventory</span></Link>
                </div>
                <div className='conversation-icon'>
                    <TbMessageCircle className='conversation'/><span>Conversations</span>
                </div>
                <div className='withdraw-icon'>
                    <TbCurrencyDollar className='withdraw'/><span>Withdraw</span>
                </div>
                <div className='settings-icon'>
                    <FiSettings className='settings'/><span>Settings</span>
                </div>
                <div className='footer'>
                    <div className='logout'>
                        <TbLogout className='tbIcon'/>
                        Logout
                    </div>
                    <div className='support'>
                        <BiSupport className='biIcon'/>
                       Support
                     </div>
                 </div>
             </div>
         </div>
     </>
  )
}

export default Sidebar