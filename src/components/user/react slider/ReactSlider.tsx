import React, { useEffect, useState } from "react";
import "./ReactSlider.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../button/Button";
import { FaArrowRight } from "react-icons/fa";

const slides: Slide[] = [
  {
    eachSlide:
      "url(https://media.istockphoto.com/id/652147598/photo/panorama-of-a-nature-and-landscape-view-in-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=OAub9_gk0T10jIcM4HXiygFfn_xDChfrNkab-5xnj4c=)",
    heading: "Live your life by a compass not a clock..",
    paragraph: "Explore the beauty of nature.",
  },
  {
    eachSlide:
      "url(https://media.istockphoto.com/id/916575772/photo/namgyal-tsemo-gompa-in-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=MAdxcJNbCD7lcTB0t7NEWCc_hn16EZBKzyYoabr3pno=)",
    heading: "Jobs fill your pocket, but adventures fill your soul.",
    paragraph: "Explore the beauty of nature.",
  },
  {
    eachSlide: `url(https://t3.ftcdn.net/jpg/00/81/87/90/360_F_81879087_a1G8MBDBLSnvJ9IBBeMNbnitOGweBinb.jpg)`,
    heading: "A journey of a thousand miles begins with a single step.",
    paragraph: "Explore the beauty of nature.",
  },
  {
    eachSlide: `url(https://media.istockphoto.com/id/652147598/photo/panorama-of-a-nature-and-landscape-view-in-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=OAub9_gk0T10jIcM4HXiygFfn_xDChfrNkab-5xnj4c=)`,
    heading: "Life is either a daring adventure or nothing at all.",
    paragraph: "Explore the beauty of nature.",
  },
  {
    eachSlide: `url(https://media.istockphoto.com/id/916575772/photo/namgyal-tsemo-gompa-in-leh-ladakh-india.jpg?s=612x612&w=0&k=20&c=MAdxcJNbCD7lcTB0t7NEWCc_hn16EZBKzyYoabr3pno=)`,
    heading: "Blessed are the curious for they shall have adventures.",
    paragraph: "Explore the beauty of nature.",
  },
  {
    eachSlide: `url(https://wallpaperaccess.com/full/1844101.jpg)`,
    heading: "Take only memories, leave only footprints.",
    paragraph: "Explore the beauty of nature.",
  },
];

interface Slide {
  eachSlide: string;
  heading: string;
  paragraph: string;
}

export default function ReactSlider() {

  const [active, setActive] = useState<number>(0);
  const [contentActive, setContentActive] = useState<boolean>(false);
  const max: number = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setContentActive(true);
      setTimeout(() => {
        setContentActive(false);
      }, 500); // Adjust the timeout according to your transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [max]); // Include slides.length in the dependency array


  
  const nextOne = () => {
    setActive((prev) => (prev === max - 1 ? 0 : prev + 1));
  };

  const prevOne = () => {
    setActive((prev) => (prev === 0 ? max - 1 : prev - 1));
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

  const renderArrows = () => (
    <React.Fragment>
      <IoIosArrowBack type="button" className="arrows prev" onClick={prevOne} />
      <IoIosArrowForward
        type="button"
        className="arrows next"
        onClick={nextOne}
      />
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
          <div className={`image-contant text-center ${contentActive ? 'slide-content active' : 'slide-content'}`}>
            <div className="image-contant-inner m-4">
              <div className="heading">{slides[active].heading}</div>
              <div className="paragraph">{slides[active].paragraph}</div>
            </div>
            <div className="my-4">
              <Button text={"Contact us"} icon={<FaArrowRight />} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
