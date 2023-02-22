import React from 'react'
import InventoryNav1 from './InventoryNav1'
import copy from './Assets/u_copy-alt.png'
import img from './Assets/image 1.png'
import pie from './Assets/fi_pie-chart.png'
import eye from './Assets/fi_eye.png'
import bag from './Assets/Bag.png'
import InventoryDetails1 from './InventoryDetails1'
// import Sidenav from '../dashboard/Sidenav'

const InventoryDetails = () => {
  return (
    <>
    {/* <Sidenav/> */}
    <div className='body'>
        <InventoryNav1/>
        <div className='inventoryDetails'>
        <div className='details'>
          <h3>Luis Vuitton Jacket</h3>
          <p>Date Added 12 Sept 2022 - 12:55 pm</p>
          <a href=''><p>Product URL soairshopon.com/teegadgets-fashion-luisv...</p></a>
          <img src={copy} className='copy'/>
          <select>
            <option>Edit a Product</option>
            <option>other</option>
            <option>other</option>
            <option>other</option>
          </select>
          <p className='unpublish'>Unpublish Product</p>
        </div>

        <div className='productDetail'>
            <div className='productImg'>
              <img src={img} />
            </div>
            <div className='last'>
              <div className='lastOrder'>
                <p>Last Order 12 Sept 2022</p>
                <p className='productPublish'>Publish</p>
              </div>
              <div className='money'>
                <div className='price'>
                  <p>Price</p>
                  <p className='s-price'>₦15,000.00</p>
                </div>
                <div className='stock'>
                  <p>In-Stock</p>
                  <p className='s-price'>8</p>
                </div>
              </div>
              </div>
              <div className='productTime'>
                <div className='timing'>
                  <img src={pie} className='pie'/>
                  <select>
                    <option>All-Time</option>
                    <option>This Week</option>
                    <option>Last Week</option>
                    <option>Last Month</option>
                  </select>
                  </div>
                  <div className='timeP'>
                  <p>Total Order</p>
                  <p className='timePrice'>₦50,000.00</p>
                  </div>
              </div>
              <div className='view'>
                <div className='eye'>
                  <img src={eye}/>
                  <select>
                    <option>All-Time</option>
                    <option>This Week</option>
                    <option>Last Week</option>
                    <option>Last Month</option>
                  </select>
                </div>
                <div className='views'>
                <div className='viewing'>
                  <p>Views</p>
                  <p className='viewPrice'>1,200</p>
                </div>
                <div className='favorite'>
                  <p>Favorite</p>
                  <p className='viewPrice'>23</p>
                </div>
                </div>
              </div>
        </div>

      <div className='productPending'>
        <div className='productOrder'>
            <div className='bag'>
                <img src={bag}/>
                <select>
                  <option>All-Time</option>
                  <option>This Week</option>
                  <option>Last Week</option>
                  <option>Last Month</option>
                </select>
            </div>
            <div className='pending'>
              <div className='allOrder'>
                <p>All Order</p>
                <p className='pend'>1</p>
              </div>
              <div className='Pending'>
                <p>Pending</p>
                <p className='pend'>0</p>
              </div>
              <div className='completed'>
                <p>Completed</p>
                <p className='pend'>1</p>
              </div>
            </div>
        </div>
        <div className='canceled'>
          <div className='bag'>
            <img src={bag}/>
            <select>
              <option>All-Time</option>
              <option>This Week</option>
              <option>Last Week</option>
              <option>Last Month</option>
            </select>
          </div>
          <div className='pending'>
              <div className='allOrder'>
                <p>Canceled</p>
                <p className='pend'>0</p>
              </div>
              <div className='Pending'>
                <p>Returned</p>
                <p className='pend'>0</p>
              </div>
              <div className='completed'>
                <p>Damaged</p>
                <p className='pend'>0</p>
              </div>
            </div>
            </div>
        </div>

        <InventoryDetails1/>
        </div>
    </div>
    </>
  )
}

export default InventoryDetails