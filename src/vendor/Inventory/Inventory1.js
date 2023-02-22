import React, { useState } from 'react'
import './Inventory.css'
import { Link } from 'react-router-dom'
import {  FaChevronDown, FaSearch, FaFilter, FaCalendarAlt, FaLocationArrow, FaPlus } from 'react-icons/fa'
import sort from './Assets/sort.png'
import test from './Assets/test.png'

const Inventory1 = () => {
    const [productImg, setProductImg] = useState("")
    const [productName, setProductName] = useState("Luis Vuitton Jacket")
    const [productCategory, setProductCategory] = useState("Fashion")
    const [sellingPrice, setSellingPrice] = useState("₦15,000.00")
    const [qtyInStock, setQuantity] = useState("8")
    const [discount, setDiscount] = useState("₦0.00")
    const [value, setValue] = useState("₦8000.00")
    const [action, setAction] = useState("")
    const [status, setStatus] = useState("")

    const [productDetail] = useState(false)

  return (
    <div>
      
         <div className='product-detail'>
                <div className='product-nav'>
                    <h3>Inventory Items</h3>
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


              {productDetail? 
                <div className='Noproduct'>
                  <h3>No Product Added Yet</h3>
                  <p>Add products to your store and start selling <br/> to see your products here.</p>
                  <Link to='/InventoryAdd'><FaPlus className='plus'/> Add Product</Link>
                </div> 
              : 
              <div>
              <div className='products-list'>
                    <input type='checkbox' className='check'/>
                    <p>Product name <img src={sort}/></p>
                    <p>Category <img src={sort}/></p>
                    <p>Unit Price <img src={sort}/></p>
                    <p>In-Stock <img src={sort}/></p>
                    <p>Discount <img src={sort}/></p>
                    <p>Total Value <img src={sort}/></p>
                    <p>Action <img src={sort}/></p>
                    <p>Status <img src={sort}/></p>
                </div>
                 <hr className='product-hr'/>

                 <div className='product-item'>
                     <input type='checkbox' className='check'/>
                     <img src={test} value={productImg}/>
                    <p className='name'><Link to='/InventoryDetails'>{productName}</Link></p>
                     <p className='category'>{productCategory}</p>
                     <p className='price'>{sellingPrice}</p>
                     <p className='stock'>{qtyInStock}</p>
                     <p className='discount'>{discount}</p>
                     <p className='valuess'>{value}</p>
                     <select>
                       <option className='option'>Publish</option>
                       <option>other</option>
                       <option>other</option>
                       <option>other</option>
                     </select>
                     <p className='publish'>Published</p>
                 </div>
                  </div>}

               

                
               
            </div>
    </div>
  )
}

export default Inventory1