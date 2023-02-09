import React from 'react'
import './BlogCSS/Blog.css'
import BlogImg13 from './Assets/Rectangle 17 (6).png'
import BlogImg14 from './Assets/Rectangle 17 (7).png'
import BlogImg15 from './Assets/Rectangle 17 (8).png'
import BlogImg16 from './Assets/Rectangle 17 (9).png'
import BlogImg17 from './Assets/Rectangle 17 (10).png'
import BlogImg18 from './Assets/Rectangle 17 (11).png'
import BlogImg19 from './Assets/Rectangle 17 (12).png'

const BlogPage2 = () => {
  return (
    <div className='mt-5'>
      <img src={BlogImg13} className='blog-main-img2'/>
      <h6 className='text-start text-solid mt-3'>By Dorothy Bell- Nov 05, 2019</h6>
      <h3 className='text-start'>Cozy Living Room Essentials for Fall and Beyond</h3>
      <p className='mt-2 text-start blog-para'>One of the most important aspects of vacation has always been choosing accommodations. Finding somewhere relaxing and clean with modern furniture <br/> and close to amenities can sometimes make or break a vacation .Choosing a hotel has always been at the top of a priority list when it came to vacation...</p>

      <div className='blog-post'>
        <div className='blog-box'>
            <img src={BlogImg14} className='blog-post-img'/>
            <p className='text-solid ms-4 text-start mt-2'>By Dorothy Bell- Nov 05, 2019</p>
            <h4 className='text-start ms-4 fs-5'>Incredible Before & After Living Room Makeovers</h4>
        </div>
        <div className='blog-box'>
            <img src={BlogImg15} className='blog-post-img'/>
            <p className='text-solid ms-4 text-start mt-2'>By Dorothy Bell- Nov 05, 2019</p>
            <h4 className='text-start ms-4 fs-5'>Accent Walls for Every Style of Living Room</h4>
        </div>
        <div className='blog-box'>
            <img src={BlogImg16} className='blog-post-img'/>
            <p className='text-solid ms-4 text-start mt-2'>By Dorothy Bell- Nov 05, 2019</p>
            <h4 className='text-start ms-4 fs-5'>Furniture Ideas for Dog and Cat Owners</h4>
        </div>
        <div className='blog-box mt-4'>
            <img src={BlogImg17} className='blog-post-img'/>
            <p className='text-solid ms-4 text-start mt-2'>By Dorothy Bell- Nov 05, 2019</p>
            <h4 className='text-start ms-4 fs-5'>Pick Your Perfect Pillow With Our Quiz</h4>
        </div>
        <div className='blog-box mt-4'>
            <img src={BlogImg18} className='blog-post-img'/>
            <p className='text-solid ms-4 text-start mt-2'>By Dorothy Bell- Nov 05, 2019</p>
            <h4 className='text-start ms-4 fs-5'>Guide to Mattress Toppers & Mattress Pads: What's the Difference?</h4>
        </div>
        <div className='blog-box mt-4'>
            <img src={BlogImg19} className='blog-post-img'/>
            <p className='text-solid ms-4 text-start mt-2'>By Dorothy Bell- Nov 05, 2019</p>
            <h4 className='text-start ms-4 fs-5'>Can't Live Without: Parachute Moms Share Their Must-Have Baby Items</h4>
        </div>
      </div>

      <div className='Move-Slide d-flex align-items-center f-style'>
        <p className='blog-prev fs-5'><a href='' className='text-decoration-none text-dark'>Prev</a></p>
        <p><a href='' className='text-decoration-none text-dark fs-4'>1</a></p>
        <p><a href='' className='text-decoration-none text-dark fs-4'>2</a></p>
        <p><a href='' className='text-decoration-none text-dark fs-4'>3</a></p>
        <p><a href='' className='text-decoration-none text-dark fs-4'>4</a></p>
        <p><a href='' className='text-decoration-none text-dark fs-4'>5</a></p>
        <p className='blog-prev fs-5'><a href='' className='text-decoration-none text-dark'>Next</a></p>
      </div>
    </div>
  )
}

export default BlogPage2
