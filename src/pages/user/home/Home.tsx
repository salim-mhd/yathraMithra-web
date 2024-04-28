import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import Navbar from "../../../components/user/navbar/Navbar";
import ReactSlider from "../../../components/user/react slider/ReactSlider";
import Footer from "../../../components/user/footer/Footer";
// import Search from "../../../components/user/search/Search";
import PackagesComponent from "../../../components/user/packages/PackagesComponent";
import FeedBack from "../../../components/user/feedback/FeedBack";
import Welcome from "../../../components/user/welcome container/Welcome";
import { IoArrowForward } from "react-icons/io5";
import GalleryHeading from "../../../components/user/gallery heading component/GalleryHeading";
// import { GiVacuumCleaner } from "react-icons/gi";
// import { BsRouter } from "react-icons/bs";
// import { LiaTruckPickupSolid } from "react-icons/lia";
import ReactPlayer from "react-player";
import BlogComponent from "../../../components/user/blog/Blog";
import { blog } from "../../../interface/Interface";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { base_url } from "../../../constants/staticData";

const src = "https://youtu.be/hFh0l7rn-LU";

interface imagesData {
  heading: string;
  img: string;
}

const imageMockData: imagesData[] = [
  {
    heading: "Leh",
    img: "https://content.r9cdn.net/rimg/dimg/7d/10/d91b782d-city-53277-17313d53696.jpg?width=1366&height=768&xhint=2312&yhint=1762&crop=true",
  },
  {
    heading: "Nubra",
    img: "https://www.singgepalace.com/leh-holiday-packages/img/nubra-valley-pangong-lake-6days-tour.jpg",
  },
  {
    heading: "Pangong",
    img: "https://img.jagranjosh.com/images/2022/April/1242022/pangong-lake-ladakh.jpg",
  },
  {
    heading: "Hanle",
    img: "https://thetravellertrails.in/wp-content/uploads/2023/09/Hanle-Village-Opens-For-Foreign-tourists_02.webp",
  },
  {
    heading: "Umlingla",
    img: "https://lekhakpravin.com/wp-content/uploads/2023/09/Picsart_23-09-27_23-29-26-020.jpg",
  },
  {
    heading: "Kargil",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Kargil_Town_Panorama.jpg",
  },
];

const blogMockData: blog[] = [
  {
    _id: "1",
    heading: "10 Must-Visit Destinations for Nature Lovers",
    content:
      "From lush rainforests to towering mountains, nature has endless wonders waiting to be explored. Dive into the heart of the Amazon rainforest, hike the breathtaking trails of the Swiss Alps, or marvel at the otherworldly beauty of Iceland's landscapes. Discover the top destinations that will leave you in awe of the natural world.",
    image:
      "https://www.japjitravel.com/blog/wp-content/uploads/2021/04/Magnetic-Hill_leh-ladakh-768x442.jpg",
    createdAt: "2024-03-14T12:00:00Z",
    updatedAt: "2024-03-14T12:00:00Z",
  },
  {
    _id: "2",
    heading: "Exploring Ancient Cities: A Journey Through History",
    content:
      "Step back in time and wander through the ancient streets of Rome, Athens, and Cairo. Immerse yourself in the rich history and culture of these iconic cities as you explore majestic ruins, awe-inspiring temples, and grand monuments. Join us on a journey through the annals of history and discover the secrets of civilizations past.",
    image:
      "https://www.kosha.co/journal/wp-content/uploads/2021/11/Leh-in-Winter.jpg",
    createdAt: "2024-03-13T09:30:00Z",
    updatedAt: "2024-03-13T09:30:00Z",
  },
  {
    _id: "3",
    heading: "The Ultimate Guide to Backpacking Across",
    content:
      "Embark on an adventure of a lifetime as you backpack across Europe. From the vibrant streets of Barcelona to the romantic canals of Venice, Europe offers a treasure trove of experiences for intrepid travelers. Learn the art of budget travel, discover hidden gems off the beaten path, and create memories that will last a lifetime.",
    image: "https://www.oyorooms.com/blog/wp-content/uploads/2018/04/fe-37.jpg",
    createdAt: "2024-03-12T15:45:00Z",
    updatedAt: "2024-03-12T15:45:00Z",
  },
  {
    _id: "4",
    heading: "Unforgettable Safari: Discovering Africa's Wildlife",
    content:
      "Embark on an unforgettable safari adventure through the wilds of Africa. Witness the majesty of elephants roaming the savannah, the grace of giraffes grazing in the sunset, and the thrill of spotting a pride of lions on the prowl. Experience the magic of Africa's wildlife up close and create memories that will last a lifetime.",
    image:
      "https://static2.tripoto.com/media/filter/tst/img/15546/TripDocument/1441790656_dsc03911.jpg",
    createdAt: "2024-03-11T18:20:00Z",
    updatedAt: "2024-03-11T18:20:00Z",
  },
  // Add more entries as needed
];

export default function Home() {
  const videoEl = useRef(null); // Provide type assertion

  // this state for store Blog Details
  const [blogDeta, setBlogData] = useState<blog[]>(blogMockData);

  // this fuciton for fetch Blog data
  // const fetchBlogData = async () => {
  //   let res = await axios.get(`${base_url}/blog`);
  //   console.log("res", res.data.blogs);
  //   let responseData = res.data.blogs;
  //   setBlogData(responseData);
  // };

  useEffect(() => {
    // fetchBlogData();
    setBlogData(blogMockData);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="Home">
      <Navbar option="home" />
      <ReactSlider />
      {/* <div className="search">
        <Search />
      </div> */}
      <Welcome />
      <PackagesComponent />
      <FeedBack />
      <div className="Gallery-container">
        <div className="gallery-heading-container">
          <div className="text">
            <div className="text-heading">Destination Gallery</div>
            <div>
              A curated photo gallery showcasing just a glimpse of the myriad
              breathtaking destinations available.
            </div>
          </div>
          <button onClick={() => {
              navigate("/gallery");
            }} className="button">
            <div className="me-2">View All</div>
            <IoArrowForward className="fs-5" />
          </button>
        </div>
        <div className="gallery-images-conianer">
          <div className="small-heading">Our photo gallery on trip</div>
        </div>
        <div className="galleries">
          <div className="galleries-content">
            {imageMockData.map((gallery: any, index: number) => (
              <GalleryHeading
                key={index}
                heading={gallery.heading}
                image={gallery.img}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="Blog-container">
        <div className="blog-heading-container">

<div>
<div className="text-heading">Our Best Blogs</div>
          <div>Explore a selection of our finest travel blogs.</div>
</div>

          <button onClick={() => {
              navigate("/blog");
            }} className="button">
            <div className="me-2">View All</div>
            <IoArrowForward className="fs-5" />
          </button>
        </div>
        <div className="blog-container">
          <div className="blog">
            {blogDeta.map((blog: any, index: number) => (
              <div key={index}>
                <BlogComponent
                  heading={blog.heading}
                  content={blog.content}
                  image={blog.image}
                  createDate={blog.createdAt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Premotion mx-auto">
        <div className="Premotion-text-container">
          <div className="heading">Live your life by a compass!</div>
          <div className="paragraph">
            Products opronline services or over the Internet. Electronic
            commerce draws on technologies such as mobile commerce application
          </div>
        </div>
        <div className="Premotion-video">
          <ReactPlayer
            ref={videoEl}
            url={src}
            muted={true}
            playing={true}
            width="100%"
            height="250%"
          />
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
