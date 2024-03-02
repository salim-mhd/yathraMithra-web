import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Blog from '../pages/blog/Blog';
import Packages from '../pages/packages/Packages';

// This is app funciton
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/packages" element={<Packages />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
