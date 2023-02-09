import React from 'react'
import './CSS/main.css'
import img1 from './Assets/img1.png'

const Main = () => {
  return (
    <>
     <div className='container Tonys-main'>
        <div className="row">
          <div className="col-md-4 text-center mans">
               <img classname='mans'src={img1}/>
          </div>
          <div className="col-md-4 text-center dami-wrap">
            <div className='opo'>
               <p><small> QUALITY PRODUCTS</small></p> 

                <p className='text-white dami-new'>New generation</p>
                <p className='text-white dami-new'>E-commerce platform</p>
                <p className='text-white dami-new'>connecting seller to buyer</p>

                <p><small>The right platform to buy or sell from the comfort <br /> of your home. Verified products only. </small></p>

                <button className='dami-shop px-5 py-2'> shop now</button>
          </div>
          </div>
          <div className="col-md-4 text-center ">
          <p className="text-warning">2nd image</p>
          </div>
        </div>
     </div>
    </>
  )
}

export default Main