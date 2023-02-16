import React from 'react'
import error from "./Asset/error.png"
import error404 from "../../User/Error404/error404.css"
// import Nav from './Nav'

const Error404 = () => {
  return (
    <>
      {/* <Nav/> */}
      <div className=' errorDiv mb-5'>
        <div className='container text-center align-items-center'>
         <img  src={error} style={{width: "300px", height: "300px"}}/>
         <div className=''>
          <h4 className='oops fs-5 text:#1D1F1F fst-normal font-sofia pro'>Oops ! Something went wrong</h4>
            <p className='the fs-6 fst-normal lh-base font-sofia pro'>The page are looking for has been moved or doesn't exist anymore.</p>
            <button className='error-button text:#FFFFFF'><a href='#' className='text-white fs-6 p-2 text-decoration-none'>Back to Homepage</a></button>
          </div>
        </div>
      </div>
      <div className='below1'>
       <div className="container below  d-flex justify-content-space-between  text-align-center mb-3">
         <p className='text: #5D5F5F; copyright fs-6 fst-normal lh-base font-sofia pro'>Copyright © All rights Reserved </p>
         <p className='privacy text: #5D5F5F; fs-6 fst-normal lh-base font-sofia pro'>Privacy & Cookies  |  Ts&Cs  |  Accessibility</p>
       </div>
      </div>
    </>
  )
}

export default Error404