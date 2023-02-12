import React from 'react'
import './CSS/main.css'
import gorie from './Assets/Rectangle 25.png'
import gorie1 from './Assets/Rectangle 25 (1).png'
import gorie2 from './Assets/Rectangle 25 (2).png'
import gorie3 from './Assets/Rectangle 25 (3).png'
import gorie4 from './Assets/Rectangle 25 (4).png'
import gorie5 from './Assets/Rectangle 25 (6).png'
import gorie6 from './Assets/Rectangle 25 (7).png'

const Main2 = () => {
  return (
    <div>
      <div className='container'>
        <div className='tony-categories'>
            <h3>Top categories for you</h3>
            <div className='d-sm-flex categotie-img text-center'>
                <div>
                    <img src={gorie} />
                    <h6>For Kids</h6>
                </div>
                <div>
                    <img src={gorie1} />
                    <h6>For Kids</h6>
                </div>
                <div>
                    <img src={gorie2} />
                    <h6>For Kids</h6>
                </div>
                <div>
                    <img src={gorie3} />
                    <h6>For Kids</h6>
                </div>
                <div>
                    <img src={gorie4} />
                    <h6>For Kids</h6>
                </div>
                <div>
                    <img src={gorie5} />
                    <h6>For Kids</h6>
                </div>
                <div>
                    <img src={gorie6} />
                    <h6>For Kids</h6>
                </div>
            </div>
        </div>

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
      </div>
    </div>
  )
}

export default Main2
