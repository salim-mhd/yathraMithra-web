import React from "react";
import "./Blogs.scss";
import Navbar from "../../components/navbar/Navbar";
import BlogComponent from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";

export default function Blogs() {
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
      <Footer/>
    </div>
  );
}
