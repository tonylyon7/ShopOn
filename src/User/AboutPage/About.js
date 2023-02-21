import React from 'react'
import './AboutCss/About.css'
import AboutImg from './AboutImages/Rectangle 138.png'
import AboutImg2 from './AboutImages/Group 1784.png'
import AboutImg3 from './AboutImages/Group 1785.png'
import AboutImg4 from './AboutImages/Group 1787.png'
import AboutImg5 from './AboutImages/Group 1786.png'
import AboutImg6 from './AboutImages/Rectangle 140.png'
import AboutImg7 from './AboutImages/Rectangle 139.png'
import AboutImg8 from './AboutImages/Rectangle 164.png'
import AboutImg9 from './AboutImages/Rectangle 165.png'
import AboutImg10 from './AboutImages/Rectangle 166.png'
import AboutImg11 from './AboutImages/Rectangle 159.png'
import AboutImg12 from './AboutImages/Rectangle 163.png'
import AboutImg13 from './AboutImages/Rectangle 162.png'


import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const About = () => {
  return (
    <>
   <Navbar/>
    <div className='container'>
      <div className='d-sm-flex'>
          <img className='john-basket img-fluid ' src={AboutImg}/>
          <div className='john-about'>
            <div className='john-fl'> 
             <h5 className='john-ab'>ABOUT US</h5>
              <h3 className=''>Just Stay Home & Enjoy Your Shopping Time</h3>
              <p>The Expression Agenda is our global human rights strategy. Through it, we target the best means of 
                protecting rights and freedoms on the ground, while enhancing international instruments 
                that protect freedom of expression and the right to information around the world.
              </p>
              <p>
              Our annual report on the state of freedom of expression tracks global trends
              across major issues of freedom of expression and information, and how they are 
              experienced in various countries.
              </p>
              <div className='aero-money'>
                <img className='john-aero -col-sm-6 img-fluid mt-3' src={AboutImg2}/> 
                <img className='john-money -col-sm-6 img-fluid mt-3' src={AboutImg4}/> 
                <img className='john-phone -col-sm-6 img-fluid mt-3'  src={AboutImg3}/> 
              <img className='john-gift  -col-sm-6 img-fluid mt-3' src={AboutImg5}/> 
            
              </div>
              {/* <div className='phone-gift '>
             
              </div> */}
            </div>
            
          </div>
         </div>
         <div className='john-word'>
          <h4 className='text-center'>
            Makes Everything So Much Easier
          </h4>
          <h4 className='text-center'>
          It's Even More With Melor
          </h4>
          <p className=' john-believe text-center '>We believe that when we take care of our home, it takes care of us. That's why we <br/>
            make premium quality sheets, towels, robes, rugs and all things soft and wonderful.</p>
          </div>
          <div className=' j-cupstudy d-sm-flex'>
            <img className='john-cupboard img-fluid' src={AboutImg6}/>
            <img className='john-study img-fluid' src={AboutImg7}/>

          </div>
          <div className='john-loer text-center'>
          <p>
            Sed vulputate elit vitae magna lacinia, vel bibendum neque faucibus. Aliquam sed volutpat turpis. 
            Phasellus nisl arcu, pretium eu faucibus <br/>sed, aliquet in lacus. Pellentesque sed lacus et ipsum rutrum dignissim.
            Praesent ultrices posuere eros ac tristique.
          </p>
          <p>
            Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit. Cras neque nulla, 
            convallis non commodo et, euismod<br/> nonsese. At vero eos et accusamus et iusto odio dignissimos 
            ducimus qui blanditiis praesentium.
          </p>
          <p>
          Sed vulputate elit vitae magna lacinia, vel bibendum neque faucibus. Aliquam sed volutpat turpis. 
          Phasellus nisl arcu, pretium eu faucibus <br/>sed, aliquet in lacus. Pellentesque sed lacus et ipsum rutrum 
          dignissim. Praesent ultrices posuere eros ac tristique.
          </p>
          </div>
          <div className=''>
          <div className=' j-major'>
            <div className=''>
            <img className='image-fluid' src={AboutImg8}/>
            </div>
             <div className=''>
            <img className=' j-te img-fluid  ' src={AboutImg9}/>
            </div>
            <div className=''>
            <img className='img-fluid' src={AboutImg10}/>
            </div>
            <div className=''>
            <img className='img-fluid' src={AboutImg11}/>
            </div>
            <div className=''>
            <img className='img-fluid' src={AboutImg12}/>
            </div>
            <div className=''>
            <img className='img-fluid' src={AboutImg13}/>
            </div>
          </div>
          </div>
        </div>
    
          <Footer/>
    </>
  )
}

export default About