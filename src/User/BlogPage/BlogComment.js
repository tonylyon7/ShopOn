import React from 'react'
import './BlogCSS/Blog.css'
import blogImg from './Assets/48.png'

const BlogComment = () => {
  return (
    <div>
      <div className='f-style text-start blog-comment'>
      <hr className='blog-hr'/>
            <h3>1 Comment</h3>
            <div className='d-flex'>
                <img src={blogImg}/>
                <h5 className='ms-3 mt-2'>Amanda Spencer <br/> <span className='text-solid'>June 28, 2019</span></h5>         
            </div>
            <p className='mt-2 text-gold fs-5'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br/> voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <hr className='blog-hr'/>

            <div className=''>
                <h3>Leave a Comment</h3>
                <form className='blog-form'>
                    <label className='fs-5'>Your name</label>
                    <label className='blog-email none fs-5'>Your email</label><br/>
                    <input type='text' placeholder='ex: Julie Sample' required/>
                    <label className='fs-5 mt-3 bg-none'>Your email</label>
                    <input type='email' placeholder='ex: julie@gmail.com' className='blog-email2' required/><br/>
                    <label className='fs-5 mt-3'>Comment</label><br/>
                    <textarea placeholder='Write your comment here.' required/><br/>
                    <button type='submit' className='fs-5 mt-3'>Submit a review</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default BlogComment
