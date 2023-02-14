import React from 'react'
import './CSS/main.css'
import sofa from './Assets/sofa.png'
import group from './Assets/Group 113.png'
import holiday from './Assets/slide_banner.png'
import { Link } from 'react-router-dom'

const Main2 = () => {
  return (
    <div>
      <div className='holiday-sale mt-5 ms-sm-2 container'>
        <img src={holiday} img-fluid/>
        <Link to='' className='holiday-explore text-decoration-none text-white'>Explore Now</Link>
      </div>

    </div>
  )
}

export default Main2
