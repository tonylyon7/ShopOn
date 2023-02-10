import React from 'react'
import './BlogCSS/Blog.css'
import { FaSearch } from 'react-icons/fa'
import BlogImg2 from './Assets/Rectangle 3.png'
import BlogImg3 from './Assets/Rectangle 3 (1).png'
import BlogImg4 from './Assets/Rectangle 3 (2).png'
import BlogImg5 from './Assets/Rectangle 3 (3).png'
import BlogImg6 from './Assets/Rectangle 3 (4).png'

const BlogSide = () => {
  return (
    <div>
       <label>
                <input placeholder='Search...' className='blog-input'/>
                <FaSearch className='blog-search text-solid'/>
            </label>
                <p className='d-sm-flex justify-content-between align-items-center'><a href='' className='text-decoration-none text-dark'>All</a>  <span className='text-solid'>(309)</span></p>
                <p className='d-sm-flex justify-content-between align-items-center'><a href='' className='text-decoration-none text-dark'> Fashion</a> <span className='text-solid'> (128)</span></p>
                <p className='d-sm-flex justify-content-between align-items-center'><a href='' className='text-decoration-none text-dark'> Funiture</a> <span className='text-solid'> (23)</span></p>
                <p className='d-sm-flex justify-content-between align-items-center'><a href='' className='text-decoration-none text-dark'> Travel</a> <span className='text-solid'> (35)</span></p>
                <p className='d-sm-flex justify-content-between align-items-center'><a href='' className='text-decoration-none text-dark'> Cosmetic</a> <span className='text-solid'> (21)</span></p>
                <p className='d-sm-flex justify-content-between align-items-center'><a href='' className='text-decoration-none text-dark'> Health & Beauty</a> <span className='text-solid'> (65)</span></p>
                <p className='d-sm-flex justify-content-between align-items-center'><a href='' className='text-decoration-none text-dark'> Baby</a> <span className='text-solid'> (26)</span></p>
                <p className='d-sm-flex justify-content-between align-items-center'><a href='' className='text-decoration-none text-dark'> Jewelry</a> <span className='text-solid'> (30)</span></p>
                <p className='d-sm-flex justify-content-between align-items-center'><a href='' className='text-decoration-none text-dark'> Accesories</a> <span className='text-solid'> (54)</span></p>

                <div className='Blog-top-post f-style'>
                    <h4 className='text-start mt-4'>Top posts</h4>
                    <div className='blog-tops mt-3'> 
                       <div className='blog-box d-sm-flex'>
                            <img src={BlogImg2}/>
                            <p className='text-start ms-3'>Awesome Theme With Lots Of Features On The Boards !</p>
                        </div>
                        <p className='blog-date ms-2'>March 08, 2019</p>
                    </div>
                    <div className='blog-tops mt-4'> 
                       <div className='blog-box d-sm-flex'>
                            <img src={BlogImg3}/>
                            <p className='text-start ms-3'>The Houses Are Designed In Elegant Style</p>
                        </div>
                        <p className='blog-date'>May 26, 2019</p>
                    </div>
                    <div className='blog-tops mt-4'> 
                       <div className='blog-box d-sm-flex'>
                            <img src={BlogImg4}/>
                            <p className='text-start ms-3'>Young And Dynamic Style For Boys</p>
                        </div>
                        <p className='blog-date'>Aug 12, 2019</p>
                    </div>
                    <div className='blog-tops mt-4'> 
                       <div className='blog-box d-sm-flex'>
                            <img src={BlogImg5}/>
                            <p className='text-start ms-3'>New Styles For Designers In The Fall</p>
                        </div>
                        <p className='blog-date'>Oct 08, 2019</p>
                    </div>
                    <div className='blog-tops mt-4'> 
                       <div className='blog-box d-sm-flex'>
                            <img src={BlogImg6}/>
                            <p className='text-start ms-3'>Simple But Beautiful Design Of A Fashion Store</p>
                        </div>
                        <p className='blog-date'>Oct 19, 2019</p>
                    </div>
                </div>
    </div>
  )
}

export default BlogSide
