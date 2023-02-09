import React from 'react'
import './BlogCSS/Blog.css'
import { FaSearch } from 'react-icons/fa'
import BlogImg from './Assets/Rectangle 17.png'
import BlogImg2 from './Assets/Rectangle 3.png'
import BlogImg3 from './Assets/Rectangle 3 (1).png'
import BlogImg4 from './Assets/Rectangle 3 (2).png'
import BlogImg5 from './Assets/Rectangle 3 (3).png'
import BlogImg6 from './Assets/Rectangle 3 (4).png'
import BlogImg7 from './Assets/Rectangle 18.png'
import BlogImg8 from './Assets/Rectangle 17 (1).png'
import BlogImg9 from './Assets/Rectangle 17 (2).png'
import BlogImg10 from './Assets/Rectangle 17 (3).png'
import BlogImg11 from './Assets/Rectangle 17 (4).png'
import BlogImg12 from './Assets/Rectangle 17 (5).png'
import BlogPage2 from './BlogPage2'


const BlogPage = () => {
  return (
    <div className='mt-5'>
       <div className='blog d-sm-flex text-center ms-5'>
          <aside className='blogAside f-style fs-5'>
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
                    <h4 className='text-start mt-4'>Top post</h4>
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
          </aside>
          <section className='blog-container mt-3'>
            <img src={BlogImg} className='blog-main-img' />

            <div className='blog-contain f-style'>
                <div className='blog-text'>
                <h6 className='text-solid text-start'>By Dorothy Bell- Nov 05, 2019</h6>
                <h3 className='text-start'>A Guide To New Orleans' Best - From Boutique Hotel Maison de la Luz</h3>
                <p className='mt-2 text-start blog-para'>One of the most important aspects of vacation has always been choosing accommodations. Finding somewhere relaxing and clean with <br className='bg-none'/> modern furniture <br className='none'/> and close to amenities can sometimes make or break a vacation .Choosing a hotel has always been at the top of a <br className='bg-none'/> priority list when it came to vacation...</p>
                </div>
                <div className='blog-post'>
                    <div className='blog-box'>
                         <img src={BlogImg7} className='blog-post-img'/>
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4 fs-5 blog-text2'>How To Care For Wool Furniture</h4>
                    </div>
                    <div className='blog-box'>
                         <img src={BlogImg8} className='blog-post-img'/>
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4 fs-5 blog-text2'>Decorating And Furnishing Small Spaces</h4>
                    </div>
                    <div className='blog-box blog-b'>
                         <img src={BlogImg9} className='blog-post-img' />
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4 fs-5 blog-text2'>Our Favourite 2019 Design Furniture Trends</h4>
                    </div>
                    <div className='blog-box mt-4'>
                         <img src={BlogImg10} className='blog-post-img' />
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4 fs-5 blog-text2'>The Right Way to Layer Lighting with Mitzi</h4>
                    </div>
                    <div className='blog-box mt-4'>
                         <img src={BlogImg11} className='blog-post-img' />
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4 fs-5 blog-text2'>6 Amazing Ideas To Improve Your Dining Area</h4>
                    </div>
                    <div className='blog-box mt-4'>
                         <img src={BlogImg12} className='blog-post-img' />
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4 fs-5 blog-text2'>5 Modern Airbnbs Travel Bug You Will Love</h4>
                    </div>
                </div>

                <BlogPage2/>
            </div>
          </section>
       </div>
    </div>
  )
}

export default BlogPage
