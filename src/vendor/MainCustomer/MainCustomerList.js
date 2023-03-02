import React, { useState } from 'react'
import '../Inventory/Inventory.css'
import { Link } from 'react-router-dom'
import './MainCustomer.css'
import {  FaChevronDown, FaSearch, FaFilter, FaCalendarAlt, FaLocationArrow, FaPlus } from 'react-icons/fa'
import sort from '../Inventory/Assets/sort.png'
import CustomerData from './MainCusData'


const MainCustomerList = () => {

    const [data, setData] = useState(CustomerData);

    return(
        <div className='f-style'>
             <div className='product-detail mb-5 pb-5'>
                <div className='summery-customers d-flex justify-content-between'>
                    <h3>Customer Orders</h3>
                    <div className='summery-filter d-flex gap-2'>
                    <h4><FaSearch className='search'/> <input type='text'  placeholder='Search'/></h4>
                        <p><FaFilter className='icon'/> Filter</p>
                        <p><FaCalendarAlt className='icon'/> Filter</p>
                        <p><FaLocationArrow className='icon'/> Share</p>
                        <select className='summery-bulk'>
                          <option>Bulk Action</option>
                          <option>other</option>
                          <option>other</option>
                          <option>other</option>
                        </select>
                   </div>
                </div>
                <hr className='product-hr'/>
                <div className='d-flex gap-5 ms-4 summery-track'>
                    <input type='checkbox' className='check'/>
                    <p>Name of customer <img src={sort}/></p>
                    <p>Order Date <img src={sort}/></p>
                    <p>Order Type <img src={sort}/></p>
                    <p>Tracking ID <img src={sort}/></p>
                    <p>Order Total <img src={sort}/></p>
                    <p>Action <img src={sort}/></p>
                    <p>Status <img src={sort}/></p>
                </div>
                 <hr className='product-hr'/>
                {
                    data.map((items) => {
                        return(
                            <div className='d-flex gap-5 ms-4 customer-action mt-3 mb-3'>
                                <input type='checkbox' className='check'/>
                                <p className=''><Link to='/InventoryDetails'>Janet Adebayo</Link></p>
                                <p className=''>12 Aug 2022 - 12:25 am</p>
                                <p className=''>Home Delivery</p>
                                <p className=''>9348fjr73</p>
                                <p className=''>₦25,000.00</p>
                                <select>
                                <option className='option'>Completed</option>
                                <option>other</option>
                                <option>other</option>
                                <option>other</option>
                                </select>
                                <p className='publish'>Published</p>
                            </div>
                        )
                    })
                }
                <hr className='product-hr'/>
                <div className='summery-footer d-flex justify-content-between align-items-center'>
                    <div className='d-flex gap-2'>
                      <select>
                        <option>20</option>
                        <option>40</option>
                        <option>60</option>
                        <option>80</option>
                        <option>100</option>
                      </select>
                      <p style={{ color: "#A6A8B1", fontSize: "14px" }}>Items per page</p>
                      <p className='ms-3' style={{ color: "#666666", fontSize: "14px" }}>1-20 of 200 items</p>
                    </div>
                    <div className='d-flex gap-2'>
                      <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                      <p  style={{ color: "#666666", fontSize: "14px" }}>of 44 page</p>
                      <p className='ms-3'><span>{'<'}</span> <span className='ms-1'>{'>'}</span></p>
                    </div>
                </div>
        </div>
        </div>
    )
}


export default MainCustomerList