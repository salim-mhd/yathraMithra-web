import React from "react";
import "./About.scss";
import Navbar from "../../../components/user/navbar/Navbar";
import Footer from "../../../components/user/footer/Footer";
// import { LiaTruckPickupSolid } from "react-icons/lia";
// import { BsRouter } from "react-icons/bs";
// import { GiVacuumCleaner } from "react-icons/gi";

export default function About() {
  return (
    <div className="About">
      <Navbar option={"about"} />
      <div className="about-container">
        <div className="about-heading-container">
          <div className="heading">About Us</div>
          <div className="paragraph">
            Yathra Mithra is more than just a travel solution website.
          </div>
        </div>
        <div className="text-center m-5">
          <div>
            Yathra Mithra is more than just a travel solution website; it's a
            passion project born from the adventurous spirits of Sudeesh and
            Joshna. Originally from the lush landscapes of Munnar, Kerala, they
            now call the rugged terrain of Leh Ladakh home. Their intimate
            connection with these diverse environments fuels their mission to
            support and guide travelers seeking extra care and support in
            destinations like Ladakh, Srinagar, and beyond. Sudeesh's love for
            mountaineering has taken him to the summits of numerous peaks in
            India and neighboring countries, providing him with invaluable
            insights into the challenges and rewards of high-altitude travel.
            Meanwhile, Joshna's background as a sports journalist and writer
            ignites her curiosity to explore the world, exemplified by her epic
            solo journey across India on a two-wheeler Activa. At Yathra Mithra,
            they offer a range of packages tailored to specific locations,
            ensuring travelers receive personalized experiences that cater to
            their unique preferences and needs. Whether it's crafting a
            customized itinerary or providing expert advice, Sudeesh and Joshna
            are dedicated to empowering travelers and ensuring they embark on
            unforgettable journeys with confidence and ease. Feel free to reach
            out anytime for their valuable insights and unwavering support.
          </div>
        </div>

        {/* <div className="Fecilities-container">
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
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
