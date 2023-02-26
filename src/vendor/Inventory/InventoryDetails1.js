import React from 'react'
import {  FaChevronDown, FaSearch, FaFilter, FaCalendarAlt, FaLocationArrow, FaPlus } from 'react-icons/fa'
import sort from './Assets/sort.png'


const InventoryDetails1 = () => {
  return (
    <div>
          <div className='product-detail2'>
         <div className='product-nav'>
                    <h3>Purchases</h3>
                    <div className='item'>
                    <h4><FaSearch className='search'/> <input type='text'  placeholder='Search'/></h4>
                        <p><FaFilter className='icon'/> Filter</p>
                        <p><FaCalendarAlt className='icon'/> Filter</p>
                        <p><FaLocationArrow className='icon'/> Share</p>
                        <select className='bulk'>
                          <option>Bulk Action</option>
                          <option>other</option>
                          <option>other</option>
                          <option>other</option>
                        </select>
                   </div>
                </div>
                <hr className='product-hr'/>

                <div className='products-list list2'>
                    <input type='checkbox' className='check'/>
                    <p>Order Date <img src={sort}/></p>
                    <p>Order Type <img src={sort}/></p>
                    <p>Unit Price <img src={sort}/></p>
                    <p>Qty <img src={sort}/></p>
                    <p>Discount <img src={sort}/></p>
                    <p>Order Total<img src={sort}/></p>
                    <p>Status <img src={sort}/></p>
                </div>
                <hr className='product-hr'/>

                <div className='products-list list3'>
                    <input type='checkbox' className='check'/>
                    <p>12 Aug 2022 - 12:25 am</p>
                    <p>Home Delivery</p>
                    <p>₦25,000.00</p>
                    <p>2</p>
                    <p>₦0.00</p>
                    <p>₦50,000.00</p>
                    <p className='status'>Completed</p>
                </div>
                </div>
    </div>
  )
}

export default InventoryDetails1