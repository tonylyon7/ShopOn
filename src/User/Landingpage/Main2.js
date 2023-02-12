import React from 'react'
import './CSS/main.css'
import sofa from './Assets/sofa.png'
import group from './Assets/Group 113.png'

const Main2 = () => {
  return (
    <div>
      <div className='container'>
        <div className='tony-popular mt-5 text-white'>
            <h3 className='text-center pt-5'>Popular Categories</h3>
            <div className='d-sm-flex popular-head'>
                <h5>Living room</h5>
                <h5>Kitchen & Dining</h5>
                <h5>Bedroom</h5>
                <h5>Bathroom</h5>
                <h5>Workspace</h5>
            </div>
            <hr className='popluar-hr'/>
            <div className='d-sm-flex popular-body'>
                <div className='tony-body'>
                    <h6>Accessories</h6>
                    <h6>Cabinets</h6>
                    <h6>Amchairs</h6>
                    <h6>Bookcases</h6>
                    <h6>Curtains</h6>
                    <h6>Coffe Tables</h6>
                </div>
                <div className='tony-body'>
                    <h6>Appliances</h6>
                    <h6>Cabinets</h6>
                    <h6>Chairs</h6>
                    <h6>Cookware</h6>
                    <h6>Curtains</h6>
                    <h6>Dining Tables</h6>
                </div>
                <div className='tony-body'>
                    <h6>Beds</h6>
                    <h6>Curtains</h6>
                    <h6>Chets</h6>
                    <h6>Lighting</h6>
                    <h6>Mattresses</h6>
                    <h6>Mirrors</h6>
                </div>
                <div className='tony-body'>
                    <h6>Accessories</h6>
                    <h6>Cabinets</h6>
                    <h6>Lighting</h6>
                    <h6>Mirrors</h6>
                    <h6>Showers</h6>
                    <h6>Sinks</h6>
                </div>
                <div className='tony-body'>
                    <h6>Chairs</h6>
                    <h6>Lighting</h6>
                    <h6>Desks</h6>
                    <h6>Drawers</h6>
                    <h6>Organissers</h6>
                    <h6>Bookcases</h6>                
                </div>
            </div>
        </div>

        <div className='great-design d-flex'>
          <div className='great-sofa'>
            <img src={sofa} className='ms-5 design-sofa'/>
            <img src={group} className='great-60'/>
          </div>
          <div className='design-text text-center text-white'>
            <h5 className='design-wood'>Make real with wood</h5>
            <h3>Greate Design Affordable Prices</h3>
          </div>
          <div className='mt-5'>
            <a href='' className='design-explore text-decoration-none text-white text-center'>Explore Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main2
