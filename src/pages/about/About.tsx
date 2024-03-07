import React from 'react'
import "./About.scss"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { BsRouter } from "react-icons/bs";
import { GiVacuumCleaner } from "react-icons/gi";

export default function About() {
  return (
    <div className="About">
      <Navbar option={"about"} />
      <div className="about-container">
        <div className="about-heading-container">
          <div className="heading">About Us</div>
          <div className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="text-center m-5">
          <div className="fs-1 mb-4">sample</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            velit odio repellendus a quia, molestias ipsa ducimus maiores
            accusamus officia error. Corporis quo facere similique
            exercitationem veniam praesentium blanditiis ad!
          </div>
        </div>

        <div className="Fecilities-container">
          <div className="fecilities-heading"></div>
          <div className="fecilities-content">
            <div className="icon-text-container">
              <div className="icon-container">
                <GiVacuumCleaner className="icon" />
              </div>
              <div className="py-2">
                <div className="fw-bold fs-4 my-2">Room Cleaning</div>
                <div className="w-50 mx-auto">
                  Proin massa augue, lacinia at blandit ac, fringilla
                  scelerisque tortor
                </div>
              </div>
            </div>
            <div className="icon-text-container">
              <div className="icon-container">
                <BsRouter className="icon" />
              </div>
              <div className="py-2">
                <div className="fw-bold fs-4 my-2">Room Wifi</div>
                <div className="w-50 mx-auto">
                  Proin massa augue, lacinia at blandit ac, fringilla
                  scelerisque tortor
                </div>
              </div>
            </div>
            <div className="icon-text-container">
              <div className="icon-container">
                <LiaTruckPickupSolid className="icon" />
              </div>
              <div className="py-2">
                <div className="fw-bold fs-4 my-2">Pickup & Drop</div>
                <div className="w-50 mx-auto">
                  Proin massa augue, lacinia at blandit ac, fringilla
                  scelerisque tortor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
