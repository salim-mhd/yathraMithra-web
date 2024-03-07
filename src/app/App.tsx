import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from '../pages/home/Home';
import About from "../pages/about/About";
import Packages from '../pages/packages/Packages';
import Blogs from "../pages/blog/Blogs";
import Contact from "../pages/contact/Contact";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
