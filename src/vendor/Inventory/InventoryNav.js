import React, { useState } from 'react'
import './Inventory.css'
import pro from './Assets/profile 1.png'
import { FaChevronDown, FaBell, FaHome, FaPlus, FaFolderMinus } from 'react-icons/fa'
import icon from './Assets/icon.png'
import Inventory1 from './Inventory1'
import { Link } from 'react-router-dom'
import InventoryNav1 from './InventoryNav1'
// import Sidenav from '../dashboard/Sidenav'


const InventoryNav = () => {
const [vendor, setVendor] = useState("")
const [product, setProduct] = useState("350")
const [stock, setStock] = useState("₦922,901,000.00")


  return (
    <>
    {/* <Sidenav/> */}
    <div className='body'>
        <div className='header'>
        <InventoryNav1/>
        <div className='inventory'>
            <div className='inventory-nav'>
            <h3>Inventory Summary</h3>
            <Link to='/InventoryAdd'><p><FaPlus className='plus'/> Add a New Product</p></Link>
            </div>
            <div className='invent'>
                <div className='invent-box'>
                    <FaFolderMinus  className='folder'/>
                    <div className='invent-box2'>
                        <div className='product'>
                            <p>All Product</p>
                            <p className='Product'>{product}</p>
                        </div>
                        <div className='stock'>
                            <p>Total Stock</p>
                            <p className='Stock'>{stock}</p>
                        </div>
                    </div>
                </div>
                <div className='invent2-box'>
                    <h4>Categories</h4>
                    <h5><span className='num'>24</span> <span className='span'>View all categories</span></h5>
                    <h5 className='sub'>Sub categories</h5>
                    <h5><span className='num'>64</span> <span className='span'>View all</span></h5>
                    <p><FaPlus/> Add category</p>
                </div>
                <div className='Alert'>
                    <img src={icon} className='icon' />
                    <select className='week'>
                        <option>This Week</option>
                        <option>Last Week</option>
                        <option>Yesterday</option>
                        <option>2 Day Ago</option>
                    </select>
                    <div className='invent-box3'>
                        <div className='lowStock'>
                            <p className='special'>Low Stock Alert</p>
                            <p className='num'>23</p>
                        </div>
                        <div className='expired'>
                            <p>Expired</p>
                            <p className='num'>3</p>
                        </div>
                        <div className='rating'>
                            <p>1 Start Rating</p>
                            <p className='num'>2</p>
                        </div>
                    </div>
                </div>
            </div>
           <Inventory1/>
        </div>
        </div>
    </div>
    </>
  )
}

export default InventoryNav