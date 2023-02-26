import React from 'react'
import "../Styles/Shophead.css"
import hback from "../Images/hback.svg"

const Shopheader = () => {
  return (
    <>
        <header className='malhead'>
            <div className="card">
                <img className="card-img-top" src={hback} alt="Card image"/>
                <div className="card-img-overlay text-center">
                  <p className='malshp1'>Home ^ Shop</p>
                  <p className='malshp2'>Shop</p>
                  <p className='malshp3'>Shop our newest items, made with love by the world's best artisans.</p>
                </div>
            </div>
        </header>
    </>
  )
}

export default Shopheader