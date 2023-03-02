import React, { useState } from 'react'
import '../Inventory/Inventory.css'
import './MainCustomer.css'
import { FaChevronDown, FaBell, FaHome, FaPlus, FaFolderMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import icon from './Assets/icon (1).png'
import icon2 from './Assets/icon.png'
import MainCustomerList from './MainCustomerList'
// import Sidenav from '../dashboard/Sidenav'


const MainCusNav = () => {
const [vendor, setVendor] = useState("")
const [product, setProduct] = useState("350")
const [stock, setStock] = useState("₦922,901,000.00")


  return (
    <>
    {/* <Sidenav/> */}
    <div className='body'>
        <div className='header'>
        <div className='inventory pb-1'>
            <div className='inventory-nav'>
            <h3>Orders Summary</h3>
            <Link to=''><p><FaPlus className='plus'/>Sell now</p></Link>
            </div>
            <div className='d-flex gap-4 f-style ms-3 mt-4'>
                <div className='order-summery-box'>
                    <div className='d-flex justify-content-between align-item-center'>
                       <img src={icon} />
                       <select className='order-summery-select'>
                        <option>This Week</option>
                        <option>Last Week</option>
                        <option>Last Month</option>
                       </select>
                    </div>
                    <div className='d-flex gap-5 summery-box'>
                        <p className='text-start'>ALL Orders <br/> <span>450</span></p>
                        <p className='text-start'>Pending <br/> <span>5</span></p>
                        <p className='text-start'>Completed <br/> <span>320</span></p>
                    </div>
                </div>
                <div className='order-summery-box'>
                    <div className='d-flex justify-content-between align-item-center'>
                       <img src={icon} />
                       <select className='order-summery-select'>
                        <option>This Week</option>
                        <option>Last Week</option>
                        <option>Last Month</option>
                       </select>
                    </div>
                    <div className='d-flex gap-5 summery-box'>
                        <p className='text-start'>Canceled <br/> <span>30 <span className='small-span text-danger'>-20%</span></span></p>
                        <p className='text-start'>Returned <br/> <span>20</span></p>
                        <p className='text-start'>Damaged <br/> <span>5</span></p>
                    </div>
                </div>
                <div className='order-summery-box2'>
                    <div className='d-flex justify-content-between align-item-center'>
                        <img src={icon2} />
                        <select className='order-summery-select'>
                        <option>This Week</option>
                        <option>Last Week</option>
                        <option>Last Month</option>
                       </select>
                    </div>
                    <div className='d-flex justify-content-between align-item-center summery-box'>
                        <p className='text-start text-danger'>Abandoned Cart <br/> <span className='text-dark'>20% <span className='small-span'>+0.00%</span></span></p>
                        <p className='text-start'>Customers <br/> <span>30</span></p>
                    </div>
                </div>
            </div>

            <MainCustomerList/>
        </div>
        </div>
    </div>
    </>
  )
}

export default MainCusNav