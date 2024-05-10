import React from "react";
import "./Contact.scss";
import Navbar from "../../../components/user/navbar/Navbar";
import Footer from "../../../components/user/footer/Footer";

export default function Contact() {
  return (
    <div className="Contact">
      <Navbar option={"contact"} />
      <div className="contact-container">
        <div className="contact-heading-container">
          <div className="heading">Contact Us</div>
          <div className="paragraph">
          Feel free to get in touch with us for our steadfast assistance.
          </div>
        </div>
        <div className="text-center">
          <u className="fs-1 underline">Send Message</u>
          <div className="px-5">
            <div className="m-5">
              <input
                type="text"
                className="col-md-4 p-2 m-1"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="col-md-4 p-2 m-1"
                placeholder="Your Email"
              />
            </div>
            <div className="m-5">
              <input
                type="text"
                className="col-md-4 p-2 m-1"
                placeholder="Your Phone"
              />
              <input
                type="text"
                className="col-md-4 p-2 m-1"
                placeholder="Subject"
              />
            </div>
            <div className="mx-5">
              <textarea
                name=""
                id=""
                rows={10}
                placeholder="Message"
                className="col-8 m-1"
              ></textarea>
            </div>
            <button className="m-5 px-4 py-3 rounded button">Submit Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
