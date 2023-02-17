import React from "react"
import "../Contact/Contact.css"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import home from './Assets/Rectangle.png'
import phone from './Assets/Vector.png'
import email from './Assets/Union.png'
import facebook from './Assets/Facebook.png'
import google from './Assets/Google.png'
import camera from './Assets/Camera.png'
import twitter from './Assets/Twitter.png'
import youtube from './Assets/Youtube.png'

const Contact = () => {
  return (
    <section className="contact">
      <Navbar/>
      <div className="container-fluid">
        <div className="d-sm-flex gap-md-5 mt-md-5 ms-md-3 mt-5">
          <div className="contact-begin col-md-6">
            <h2>Contact Us</h2>
            <p>
              We love to hear from you, so if there's anything you'd like to ask
              us we're right here <br /> and ready to help in every way we can.
            </p>
            <div className=" col-md-6 d-sm-flex gap-md-2">
              <form className="contact-form">
              <label className="name-label">Your name</label>
              <input type="text" placeholder="ex: Chisom Sample" />
              </form>

              <form className="contact-form">
              <label className="email-label">Your email</label>
              <input type="email" placeholder="ex:chisom@gmail.com"/>
              </form>

            </div>
            <div className=" col-md-6 d-sm-flex gap-md-2 mt-md-2 ">
              <form className="contact-form">
                <label className="phone-label">Your phone</label>
                <input type="text" placeholder="ex: +1 234 455 5564" />
              </form>

              <form className="contact-form">
                <label className="subject-label">Subject</label> 
                <input type="text" placeholder="ex: return"/>{" "}
              </form>
            </div>
            <div className=" col-md-12 d-sm-flex mb-5">
              <form className="contact-form">
                <label className="message-label">Message</label>
                <textarea placeholder="Write your message here."></textarea>{" "}
                <button type="submit">Submit</button>
              </form>
            </div>         
          </div>
          <div className="working-hour ms-sm-5">
            <h3>WORKING HOURS</h3>
            <p className="mt-1">Monday-Friday, 9:00am-5:00pm WAT.</p>

            <p className="d-flex align-items-center"><img src={home} className='me-3'/> Soair Hub, Airforce base Ikeja LAGOS</p>
            <p className="d-flex align-items-center"><img src={phone} className='me-3'/> +2347082427348</p>
            <p className="d-flex align-items-center"><img src={email} className='me-3'/> hello@shoponsoair.com</p>

            <h3 className="mt-4">JOIN US</h3>
            <p>
              We are happily open new collaboration. You can ask any questions
              and offer problems by phone,email, Instagram or Facebook.
            </p>
            <div className="contact-social">
              <a href="" target='_blank'><img src={facebook}/></a>
              <a href="" target='_blank'><img src={google}/></a>
              <a href="" target='_blank'><img src={camera}/></a>
              <a href="" target='_blank'><img src={twitter}/></a>
              <a href="" target='_blank'><img src={youtube}/></a>
            </div>
          </div>
        </div>
        <div className="mt-5 iframe-map">
          <iframe
            width="100%"
            height="350px"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=code learners soair&t=&z=14&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            // scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Contact
