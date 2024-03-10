import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import PackageManagment from '../pages/admin/package managment/PackageManagment';

// This is app funciton
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />

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
