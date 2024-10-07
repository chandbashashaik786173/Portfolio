import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div className="contact-box">
      <Navbar />
      <div className="contact-main-div   ">
        <div className="contact-container  bg-info">
          <div className="container">
            <h3 className="text-center mb-5 bg-danger ">Contact Us</h3>
            <form action="#" className="contact-form">
              <div className="form-row">
                <div className="input-data">
                  <div className="underline"></div>
                  <label htmlFor="" className="labeltext">
                    Name
                  </label>
                </div>
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="" className="labeltext">
                    Mobile Number
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="" className="labeltext">
                    Email Address
                  </label>
                </div>
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label htmlFor="" className="labeltext">
                    Suggestions
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="input-data textarea">
                  <textarea rows="8" cols="80" required></textarea>
                  <br />
                  <div className="underline"></div>
                  <label htmlFor="" className="labeltext">
                    Write your message
                  </label>
                </div>
              </div>
              <div className="text-center">
                <button type="button">Submit</button>
              </div>
            </form>
            <div className="contact-info mt-5">
              <h4>Contact Information</h4>
              <p>
                Feel free to contact us via phone or email. Our team is
                available to assist you with any inquiries you may have.
              </p>
              <ul>
                <li>Phone: +91 123 456 7890</li>
                <li>Email: info@example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
