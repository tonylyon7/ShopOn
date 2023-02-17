import React, { useState } from 'react'
import './BlogCSS/Blog.css'
import Navbar from '../Navbar/Navbar'
import { FaChevronCircleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import BlogImg from './Assets/Rectangle 17.png'
import BlogImg7 from './Assets/Rectangle 18.png'
import BlogImg8 from './Assets/Rectangle 17 (1).png'
import BlogImg9 from './Assets/Rectangle 17 (2).png'
import BlogImg10 from './Assets/Rectangle 17 (3).png'
import BlogImg11 from './Assets/Rectangle 17 (4).png'
import BlogImg12 from './Assets/Rectangle 17 (5).png'
import BlogPage2 from './BlogPage2'
import BlogSide from './BlogSide'
import Footer from '../Footer/Footer'


const BlogPage = () => {
     const [show, setShow] = useState(false);

  return (
     <>
    <div className=''>
         <Navbar/>
       <div className='blog d-sm-flex text-center ms-5 mt-4'>
       <div className='blog-pull'>
          {
               show &&   <aside className='blogAside f-style fs-5'>
                              <BlogSide/>
                         </aside>
          }
          
               <h5 className='text-start' onClick={() => setShow(!show)}>{show === false ? "Pull Me" : "Close Me"}</h5>
          </div>
          <section className='blog-container mt-3'>
            <img src={BlogImg} className='blog-main-img' />

            <div className='blog-contain f-style'>
                <div className='blog-text'>
                <h6 className='text-solid text-start'>By Dorothy Bell- Nov 05, 2019</h6>
                <h3 className='text-start'><Link to='/BlogDetail' className='text-decoration-none text-dark'>A Guide To New Orleans' Best - From Boutique Hotel <br className='bg-none'/> Maison de la Luz</Link></h3>
                <p className='mt-2 text-start blog-para'>One of the most important aspects of vacation has always been <br className='bg-none'/> choosing accommodations. Finding somewhere relaxing and clean <br className='bg-none'/> with  modern furniture and close to amenities can sometimes make <br className='bg-none'/> or break a vacation .Choosing a hotel has always been at the top <br className='bg-none'/> of a priority list when it came to vacation...</p>
                </div>
                <div className='blog-post f-style'>
                    <div className='blog-box'>
                         <img src={BlogImg7} className='blog-post-img'/>
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4 b-text blog-text2'>How To Care For Wool Furniture</h4>
                    </div>
                    <div className='blog-box'>
                         <img src={BlogImg8} className='blog-post-img'/>
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4 b-text blog-text2'>Decorating And Furnishing Small Spaces</h4>
                    </div>
                    <div className='blog-box blog-b'>
                         <img src={BlogImg9} className='blog-post-img' />
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4  b-text blog-text2'>Our Favourite 2019 Design Furniture Trends</h4>
                    </div>
                    <div className='blog-box mt-4'>
                         <img src={BlogImg10} className='blog-post-img' />
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4 b-text blog-text2'>The Right Way to Layer Lighting with Mitzi</h4>
                    </div>
                    <div className='blog-box mt-4'>
                         <img src={BlogImg11} className='blog-post-img' />
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4  b-text blog-text2'>6 Amazing Ideas To Improve Your Dining Area</h4>
                    </div>
                    <div className='blog-box mt-4'>
                         <img src={BlogImg12} className='blog-post-img' />
                         <p className='text-solid ms-md-4 text-start mt-2 blog-text2'>By Dorothy Bell- Nov 05, 2019</p>
                         <h4 className='text-start ms-md-4 b-text blog-text2'>5 Modern Airbnbs Travel Bug You Will Love</h4>
                    </div>
                </div>
               
                <BlogPage2/>
            </div>
          </section>
       </div>
    </div>
    <Footer className='blog-footer' />
    </>
  )
}

export default BlogPage
