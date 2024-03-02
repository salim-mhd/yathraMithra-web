import React from "react";
import "./GalleryHeading.scss";
import image1 from "../../assets/package images/LADAKH-1.jpeg";

export default function GalleryHeading() {
  return (
    <div className="GalleryHeading my-2">
      <div className="image-container">
        <img src={image1} alt="" className="image" />
        <div className="image-text-conatainer">
          <div className="heading">Singapore</div>
          <div className="sub-heading">15,467 Properties</div>
        </div>
        <div className="hover-items">
          <div className="hover-items-text"><div>30+</div></div>
        </div>
      </div>
    </div>
  );
}
