import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import { CgMenuGridO } from 'react-icons/cg';
import { useNavigate } from "react-router-dom";
import { IoClose } from 'react-icons/io5';

interface NavbarComponent {
  option: string;
}

const Navbar: React.FC<NavbarComponent> = ({ option }) => {
  const [showColor, setShowColor] = useState(false);
  const [showHover, setShowHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100; // Adjust this threshold as needed
      if (scrollPosition > scrollThreshold) {
        setShowColor(true);
      } else {
        setShowColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [option]);

  const navigate = useNavigate();

  return (
    <>
      <div className={`Navbar ${showColor ? "show-color" : ""}`}>
        <div>
          <img src={logo} alt="Logo" height={60} className="pb-2 m-2 logo" />
        </div>
        <div className="d-flex menu">
          <div
            className={`mx-4 menu-contant ${option === "home" ? "active" : ""}`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className={`mx-4 menu-contant ${
              option === "packages" ? "active" : ""
            }`}
            onClick={() => {
              navigate("/packages");
            }}
          >
            Packages
          </div>
          <div
            className={`mx-4 menu-contant ${
              option === "gallery" ? "active" : ""
            }`}
            onClick={() => {
              navigate("/");
            }}
          >
            Gallery
          </div>
          <div
            className={`mx-4 menu-contant ${option === "blog" ? "active" : ""}`}
            onClick={() => {
              navigate("/blog");
            }}
          >
            Blog
          </div>
          <div
            className={`mx-4 menu-contant ${
              option === "about" ? "active" : ""
            }`}
            onClick={() => {
              navigate("/about");
            }}
          >
            About us
          </div>
          <div
            className={`mx-4 menu-contant ${
              option === "contact" ? "active" : ""
            }`}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact us
          </div>
        </div>
        {showHover ? <IoClose className="fs-1 m-3 hover-icon"  onClick={()=>setShowHover(false)}/> : <CgMenuGridO className="fs-1 m-3 hover-icon"  onClick={()=>setShowHover(true)}/>}
      </div>
      {showHover && (      <div className="d-flex align-items-center justify-content-center">
        <div className="hover-navbar-container">
          <div
            className={`content ${option === "home" ? "content-hover" : ""}`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className={`content ${option === "packages" ? "content-hover" : ""}`}
            onClick={() => {
              navigate("/packages");
            }}
          >
            Packages
          </div>
          <div
            className={`content ${option === "gallery" ? "content-hover" : ""}`}
            onClick={() => {
              navigate("/");
            }}
          >
            Gallery
          </div>
          <div
            className={`content ${option === "blog" ? "content-hover" : ""}`}
            onClick={() => {
              navigate("/blog");
            }}
          >
            Blog
          </div>
          <div
            className={`content ${option === "about" ? "content-hover" : ""}`}
            onClick={() => {
              navigate("/about");
            }}
          >
            About us
          </div>
          <div
            className={`content ${option === "contact" ? "content-hover" : ""}`}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact us
          </div>
        </div>
      </div>)}
    </>
  );
};

export default Navbar;
