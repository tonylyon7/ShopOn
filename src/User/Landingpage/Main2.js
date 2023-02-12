import React from 'react'
import './CSS/main.css'
import sofa from './Assets/sofa.png'
import group from './Assets/Group 113.png'

const Main2 = () => {
  return (
    <div>
      <div className='container'>
        

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
