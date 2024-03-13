import React, { useEffect, useState } from "react";
import "./Blogs.scss";
import Navbar from "../../../components/user/navbar/Navbar";
import BlogComponent from "../../../components/user/blog/Blog";
import Footer from "../../../components/user/footer/Footer";
import axios from "axios";
import { base_url } from "../../../constants/staticData";
import { blog } from "../../../interface/Interface";

export default function Blogs() {

    // this state for store Blog Details
    const [blogDeta, setBlogData] = useState<blog[]>([]);

  // this fuciton for fetch Blog data
  const fetchBlogData = async () => {
    let res = await axios.get(`${base_url}/blog`);
    console.log("res", res.data.blogs);
    let responseData = res.data.blogs;
    setBlogData(responseData);
  };

  useEffect(()=>{
    fetchBlogData();
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
          <div className="row">
            {blogDeta.map((blog: any, index :number)=>(
            <div key={index} className="col-md-6">
            <BlogComponent heading={blog.heading} content={blog.content} image={blog.image} createDate={blog.createAt} />
          </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
