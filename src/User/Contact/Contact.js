import React from "react"
import "../Contact/Contact.css"

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container-fluid">
          <div className="d-sm-flex">
            <div className="contact-begin">
              <h2>Contact Us</h2>
              <p>
                We love to hear from you, so if there's anything you'd like to
                ask us we're right here <br /> and ready to help in every way we
                can.
              </p>
              <form className="form-container">
                <label className="name-label">Your name</label>
                <label className="email-label">Your email</label> <br />
                <input
                  type="text"
                  placeholder="ex: Chisom Sample"
                  className="name-input"
                />
                <input
                  type="email"
                  placeholder="ex:chisom@gmail.com"
                  className="ms-3 email-input"
                />
                <br />
                <label className="phone-label">Your phone</label>
                <label className="subject-label">Subject</label> <br />
                <input
                  type="text"
                  placeholder="ex: +1 234 455 5564"
                  className="phone-input"
                />
                <input
                  type="text"
                  placeholder="ex: return"
                  className="ms-3 subject-input"
                />{" "}
                <br />
                <label className="message-label">Message</label> <br />
                <textarea
                  placeholder="Write your message here."
                  className="message-input"
                ></textarea>{" "}
                <br />
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
            <div className="working-hour">
              <h3>WORKING HOURS</h3>
              <p>Monday-Friday, 9:00am-5:00pm WAT.</p>

              <p>Soair Hub, Airforce base Ikeja LAGOS</p>
              <p>+2347082427348</p>
              <p>hello@shoponsoair.com</p>

              <h3>JOIN US</h3>
              <p>
                We are happily open new collaboration. You can ask any questions
                and offer problems by phone,email, Instagram or Facebook.
              </p>
            </div>
          </div>
          <div className="mt-5 iframe-map">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=code learners soair&t=&z=14&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              // scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
