import React from "react";
import Navbar from "../../../components/user/navbar/Navbar";
import "./Gallery.scss";
import Footer from "../../../components/user/footer/Footer";

function Gallery() {
  return (
    <div className="Gallery">
    <Navbar option="gallery" />
    <div className="gallery-container">
      <div className="gallery-heading-container">
      <div className="heading">Our Best Gallery</div>
      <div className="paragraph">
      A curated photo gallery showcasing just a glimpse of the myriad breathtaking destinations available.
      </div>
      </div>
      <div className="m-4 text-center">
        <div className="d-flex flex-wrap align-items-center">
            somthing....
        </div>
      </div>
    </div>
    <Footer/>
  </div>

    // <div className="Gallery">
    //   <Navbar option="gallery" />
    //   <div className="Gallery-container">
    //     <div className="Gallery-heading-container">
    //       <div className="heading">Our Best Gallery</div>
    //       <div className="paragraph">
    //         Explore a selection of our finest travel blogs.
    //       </div>
    //     </div>
    //     <div>Gallery</div>
    //   </div>
    // </div>
  );
}

export default Gallery;
