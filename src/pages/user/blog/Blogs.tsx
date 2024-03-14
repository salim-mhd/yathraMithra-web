import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import Navbar from "../../../components/user/navbar/Navbar";
import BlogComponent from "../../../components/user/blog/Blog";
import Footer from "../../../components/user/footer/Footer";
// import axios from "axios";
// import { base_url } from "../../../constants/staticData";
import { blog } from "../../../interface/Interface";

const blogMockData: blog[] = [
  {
    _id: "1",
    heading: "10 Must-Visit Destinations for Nature Lovers",
    content: "From lush rainforests to towering mountains, nature has endless wonders waiting to be explored. Dive into the heart of the Amazon rainforest, hike the breathtaking trails of the Swiss Alps, or marvel at the otherworldly beauty of Iceland's landscapes. Discover the top destinations that will leave you in awe of the natural world.",
    image: "nature_destinations.jpg",
    createdAt: "2024-03-14T12:00:00Z",
    updatedAt: "2024-03-14T12:00:00Z"
  },
  {
    _id: "2",
    heading: "Exploring Ancient Cities: A Journey Through History",
    content: "Step back in time and wander through the ancient streets of Rome, Athens, and Cairo. Immerse yourself in the rich history and culture of these iconic cities as you explore majestic ruins, awe-inspiring temples, and grand monuments. Join us on a journey through the annals of history and discover the secrets of civilizations past.",
    image: "ancient_cities.jpg",
    createdAt: "2024-03-13T09:30:00Z",
    updatedAt: "2024-03-13T09:30:00Z"
  },
  {
    _id: "3",
    heading: "The Ultimate Guide to Backpacking Across Europe",
    content: "Embark on an adventure of a lifetime as you backpack across Europe. From the vibrant streets of Barcelona to the romantic canals of Venice, Europe offers a treasure trove of experiences for intrepid travelers. Learn the art of budget travel, discover hidden gems off the beaten path, and create memories that will last a lifetime.",
    image: "backpacking_europe.jpg",
    createdAt: "2024-03-12T15:45:00Z",
    updatedAt: "2024-03-12T15:45:00Z"
  },
  {
    _id: "4",
    heading: "Unforgettable Safari Adventures: Discovering Africa's Wildlife",
    content: "Embark on an unforgettable safari adventure through the wilds of Africa. Witness the majesty of elephants roaming the savannah, the grace of giraffes grazing in the sunset, and the thrill of spotting a pride of lions on the prowl. Experience the magic of Africa's wildlife up close and create memories that will last a lifetime.",
    image: "safari_adventures.jpg",
    createdAt: "2024-03-11T18:20:00Z",
    updatedAt: "2024-03-11T18:20:00Z"
  },
  // Add more entries as needed
];

export default function Blogs() {

    // this state for store Blog Details
    const [blogDeta, setBlogData] = useState(blogMockData);

  // this fuciton for fetch Blog data
  // const fetchBlogData = async () => {
  //   let res = await axios.get(`${base_url}/blog`);
  //   console.log("res", res.data.blogs);
  //   let responseData = res.data.blogs;
  //   setBlogData(responseData);
  // };

  useEffect(()=>{
    // fetchBlogData();
    setBlogData(blogMockData);
  },[])
  
  return (
    <div className="Blogs">
      <Navbar option="blog" />
      <div className="blog-container">
        <div className="blog-heading-container">
        <div className="heading">Our Best Blogs</div>
        <div className="paragraph">
          Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor
        </div>
        </div>
        <div className="m-4 text-center">
          <div>
            {blogDeta.map((blog: any, index :number)=>(
            <div key={index}>
            <BlogComponent heading={blog.heading} content={blog.content} image={blog.image} createDate={blog.createdAt}  />
          </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
