import React, { useEffect, useRef } from "react";
import "./Home.scss";
import Navbar from "../../components/navbar/Navbar";
import ReactSlider from "../../components/react slider/ReactSlider";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";
import PackagesComponent from "../../components/packages/PackagesComponent";
import FeedBack from "../../components/feedback/FeedBack";
import Welcome from "../../components/welcome container/Welcome";
import { IoArrowForward } from "react-icons/io5";
import GalleryHeading from "../../components/gallery heading component/GalleryHeading";
import { GiVacuumCleaner } from "react-icons/gi";
import { BsRouter } from "react-icons/bs";
import { LiaTruckPickupSolid } from "react-icons/lia";
import ReactPlayer from 'react-player';
import BlogComponent from "../../components/blog/Blog";

const src = "https://youtu.be/hFh0l7rn-LU"

export default function Home() {


  const videoEl = useRef(null); // Provide type assertion

  // const attemptPlay = () => {
  //   videoEl &&
  //     videoEl.current &&
  //     videoEl.current.play().catch((error: any) => {
  //       console.error("Error attempting to play", error);
  //     });
  // };

  useEffect(() => {
    // attemptPlay();
  }, []);
  
  return (
    <div className="Home">
      <Navbar option="home" />
      <ReactSlider />
      <div className="search">
        <Search />
      </div>
      <Welcome />
      <PackagesComponent />
      <FeedBack />
      <div className="Gallery-container">
        <div className="gallery-heading-container">
          <div className="text">
            <div className="text-heading">Destination Galery</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
          </div>
          <button className="button">
            <div className="me-2">View All</div>
            <IoArrowForward className="fs-5" />
          </button>
        </div>
        <div className="gallery-images-conianer">
          <div className="small-heading">Our photo gallery on trip</div>
        </div>
        <div className="galleries">
          <div className="galleries-content">
            <GalleryHeading />
            <GalleryHeading />
            <GalleryHeading />
            <GalleryHeading />
            <GalleryHeading />
          </div>
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
                Proin massa augue, lacinia at blandit ac, fringilla scelerisque
                tortor
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
                Proin massa augue, lacinia at blandit ac, fringilla scelerisque
                tortor
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
                Proin massa augue, lacinia at blandit ac, fringilla scelerisque
                tortor
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Blog-container">
        <div className="blog-heading-container">
          <div className="text-heading">Our Best Blogs</div>
          <div>
            Proin massa augue, lacinia at blandit ac, fringilla scelerisque
            tortor
          </div>
        </div>
        <div className="m-4 text-center">
          <div className="row">
            <div className="col-md-6">
              <BlogComponent />
            </div>
            <div className="col-md-6">
              <BlogComponent />
            </div>
            <div className="col-md-6">
              <BlogComponent />
            </div>
            <div className="col-md-6">
              <BlogComponent />
            </div>
          </div>
        </div>
      </div>

      <div className="Premotion mx-auto">
        <div className="Premotion-text-container">
        <div className="heading">Wonderful House experiences nin there!</div>
        <div className="paragraph">Products opronline services or over the Internet. Electronic commerce draws on technologies such as mobile commerce application</div>
        </div>
        <div className="Premotion-video">
            <ReactPlayer ref={videoEl} url={src} muted={true} playing={true} width="100%" height="250%" />
        </div>
        {/* <video
        className="video"
          loop
          muted
          src={src}
          ref={videoEl}
        /> */}
      </div>

      <Footer />
    </div>
  );
}
