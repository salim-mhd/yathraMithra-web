import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.scss';
import Home from '../pages/user/home/Home';
import About from "../pages/user/about/About";
import Packages from '../pages/user/packages/Packages';
import Blogs from "../pages/user/blog/Blogs";
import Contact from "../pages/user/contact/Contact";

// this for admin part
import LoginPage from '../pages/admin/loginPage/LoginPage';
import BlogManagment from '../pages/admin/blog managment/BlogManagment';
import Dashbord from '../pages/admin/dashbord/Dashbord';
import PackageManagment from '../pages/admin/package managment/PackageManagement';
import Gallery from '../pages/user/gallery/Gallery';

// This is app funciton
function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, [pathname]);
  
    return null;
  };

  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/admin" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<Dashbord />} />
          <Route path="/admin/product" element={<PackageManagment />} />
          <Route path="/admin/blog" element={<BlogManagment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
