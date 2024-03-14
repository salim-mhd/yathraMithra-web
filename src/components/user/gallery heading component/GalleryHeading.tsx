import React from "react";
import "./GalleryHeading.scss";

interface galery {
  heading: string,
  image: string
}
const  GalleryHeading: React.FC<galery> = ({heading , image}) => {
  return (
    <div className="GalleryHeading my-2">
      <div className="image-container">
        <img src={image} alt="" className="image" />
        <div className="image-text-conatainer">
          <div className="heading">{heading}</div>
          <div className="sub-heading">1556 Properties</div>
        </div>
        <div className="hover-items">
          <div className="hover-items-text"><div>30+</div></div>
        </div>
      </div>
    </div>
  );
}

export default GalleryHeading;
