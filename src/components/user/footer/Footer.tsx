import React from "react";
import "./Footer.scss";
import logo from "../../../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaMapLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


export default function Footer() {
const navigate = useNavigate();

return (
    <div className="Footer p-5">
      <div className="text-center">
        <div>
          <img src={logo} height={70} alt="" />
        </div>
        <div className="my-3">
          where adventure meets discovery in every mile.
        </div>
        <div className="full-icons-container">
          <div className="icon-container">
            <FaFacebookF className="icon" />
          </div>
          <div className="icon-container">
            <FaXTwitter className="icon" />
          </div>
          <div className="icon-container">
            <FaInstagram className="icon" />
          </div>
          <div className="icon-container">
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
      <div>
        <div className="fw-bold fs-4 my-4">Information</div>
        <div className="mb-2 options" role="button" onClick={()=>{navigate('/')}}>Home</div>
        <div className="my-2 options" role="button" onClick={()=>{navigate('/gallery')}}>Gallery</div>
        <div className="my-2 options" role="button" onClick={()=>{navigate('/packages')}}>Packages</div>
        <div className="my-2 options" role="button" onClick={()=>{navigate('/blog')}}>Blog</div>
        <div className="my-2 options" role="button" onClick={()=>{navigate('/about')}}>About us</div>
        <div className="my-2 options" role="button" onClick={()=>{navigate('/contact')}}>Contact us</div>
      </div>
      <div>
        <div className="fw-bold fs-4 my-4">Contact</div>
        <div className="d-flex align-items-start">
          <FaMapLocationDot className="fs-4 me-3" />
          <div>          <div>Kerala House, </div>
          <div>Skampari,</div>
          <div>Ladakh</div></div>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <IoMailOpenOutline className="fs-4 me-3 my-3" />
          <div>yathraMithra@gmail.com</div>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <FaPhoneAlt className="fs-4 me-3" />
          <div>+91 8848392395</div>
        </div>
      </div>
    </div>
  );
}
