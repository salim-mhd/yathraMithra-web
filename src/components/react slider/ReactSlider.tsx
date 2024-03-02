import React, { useEffect, useState } from "react";
import "./ReactSlider.scss";
import image1 from "../../assets/package images/cf1f7808f4613f11b2d363e3ed028f1d.jpg";
import image2 from "../../assets/package images/251b300f-89f3-4784-841d-918039f9253d.jpeg";
import image3 from "../../assets/package images/LADAKH-1.jpeg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../button/Button";
import { FaArrowRight } from "react-icons/fa";

interface Slide {
  eachSlide: string;
}

export default function ReactSlider() {
  const slides: Slide[] = [
    {
      eachSlide: "url(https://media.istockphoto.com/id/652147598/photo/panorama-of-a-nature-and-landscape-view-in-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=OAub9_gk0T10jIcM4HXiygFfn_xDChfrNkab-5xnj4c=)",
    },
    {
      eachSlide: "url(https://media.istockphoto.com/id/916575772/photo/namgyal-tsemo-gompa-in-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=MAdxcJNbCD7lcTB0t7NEWCc_hn16EZBKzyYoabr3pno=)",
    },
    {
      eachSlide: `url(https://t3.ftcdn.net/jpg/00/81/87/90/360_F_81879087_a1G8MBDBLSnvJ9IBBeMNbnitOGweBinb.jpg)`,
    },
    {
      eachSlide: `url(https://tornavacations.com/wp-content/uploads/2022/05/242-2423564_leh-ladakh-images-hd.jpg)`,
    },
    {
      eachSlide: `url(https://media.istockphoto.com/id/916575772/photo/namgyal-tsemo-gompa-in-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=MAdxcJNbCD7lcTB0t7NEWCc_hn16EZBKzyYoabr3pno=)`,
    },
    {
      eachSlide: `url(https://wallpaperaccess.com/full/1844101.jpg)`,
    },
  ];

  const [active, setActive] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const max: number = slides.length;

  const intervalBetweenSlides = () => {
    autoplay && setActive((prev) => (prev === max - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 5000);
    return () => clearInterval(interval);
  }, [autoplay, max]);

  const toggleAutoPlay = () => setAutoplay((prev) => !prev);

const nextOne = () => {
  setActive((prev) => (prev === max - 1 ? 0 : prev + 1)); // Wrap around to the first slide if at the last slide
};

const prevOne = () => {
  setActive((prev) => (prev === 0 ? max - 1 : prev - 1)); // Wrap around to the last slide if at the first slide
};

  const isActive = (value: number) => (active === value ? "active" : "");

  const setSliderStyles = () => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    };
  };

  const renderSlides = () =>
    slides.map((item, index) => (
      <div
        className={`each-slide ${isActive(index)}`}
        key={index}
        style={{ backgroundImage: item.eachSlide }}
      ></div>
    ));

  const renderDots = () =>
    slides.map((slide, index) => (
      <li className={`dots ${isActive(index)}`} key={index}>
        <button onClick={() => setActive(index)}>
          <span>&#9679;</span>
        </button>
      </li>
    ));

  const renderPlayStop = () =>
    autoplay ? (
      <svg fill="#FFFFFF" height="20" viewBox="0 0 24 24" width="24"></svg>
    ) : (
      <svg fill="#FFFFFF" height="20" viewBox="0 0 24 24" width="24"></svg>
    );

  const renderArrows = () => (
    <React.Fragment>
      <IoIosArrowBack type="button" className="arrows prev" onClick={prevOne} />
      <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24"></svg>
      <IoIosArrowForward
        type="button"
        className="arrows next"
        onClick={nextOne}
      />
      <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50"></svg>
    </React.Fragment>
  );

  return (
    <div className="ReactSlider">
      <section className="slider">
        <div className="wrapper" style={setSliderStyles()}>
          {renderSlides()}
        </div>
        <div>{renderArrows()}</div>
        <ul className="dots-container">{renderDots()}</ul>
        <div className="d-flex align-items-center justify-content-center">
        <div className="image-contant text-center">
        <div className="image-contant-inner m-4">
          <div className="heading">“Jobs fill your pocket, but adventures fill your soul.”</div>
          <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam incidunt consequuntur cupiditate maiores.</div>
        </div>
        <div className="my-4">
        <Button text={'Contact us'} icon={<FaArrowRight />}/>
        </div>
      </div>
        </div>
      </section>
    </div>
  );
}
