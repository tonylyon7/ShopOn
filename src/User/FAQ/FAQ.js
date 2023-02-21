import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Faq.css'
import data from './FaqMap'
import { Link } from 'react-router-dom'


const FAQ = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <>
    <Navbar/>
    <div className='container mt-5'>
      <div>
        <h4>
        How Can We Help You?
        </h4>
        <p>
        Below are answers to our most commonly asked questions.
         If you cannot find an answer here, please contact us.
        </p>
      </div>

      {data.map((data, i) => {
        return (
         <div className='mt-3'>
         <div className='d-flex align-items-center justify-content-between faq-ques' onClick={() => toggle(i)}>
           <div className='d-flex'>
           <h6 className='pe-5'>{data.name}</h6>
           <h6>{data.question}</h6>
           </div>
            <h6>{selected === i ? '-' : '+'}</h6>
         </div>
         <div className={selected == i ? 'faq-ans show' : 'faq-ans'}>
           <p className='list-unstyled'>{data.answer}
            <li>{data.list1}</li>
            <li>{data.list2}</li>
            <li>{data.list3}</li>
            <li>{data.list4}</li>
            <li>{data.list5}</li>
           </p>
         <p>{data.answer2}</p>
         </div>
       </div>
        )
      })}

      <div className='d-sm-flex align-items-center mt-5 justify-content-end'>
        <p>Unable to find satisfactory answers ?</p>
        <Link to='/Contact' className='text-decoration-none ms-sm-4 faq-btn text-white text-center'>Contact Us</Link>
      </div>
      
    </div>
    </>
  )
}

export default FAQ