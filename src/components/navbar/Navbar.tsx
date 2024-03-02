import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import { CgMenuGridO } from 'react-icons/cg';

interface NavbarComponent {
  option: string;
}

const Navbar: React.FC<NavbarComponent> = ({ option }) => {
  const [showColor, setShowColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100; // Adjust this threshold as needed

      if (scrollPosition > scrollThreshold) {
        setShowColor(true);
      } else {
        setShowColor(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar ${showColor ? 'show-color' : ''}`}>
      <div>
        <img src={logo} alt="Logo" height={60} className='pb-2 m-2 logo'/>
      </div>
      <div className='d-flex menu'>
        <div className={`mx-4 menu-contant ${option === 'home' ? 'active' : ''}`}>Home</div>
        <div className='mx-4 menu-contant'>Packages</div>
        <div className='mx-4 menu-contant'>Gallery</div>
        <div className='mx-4 menu-contant'>Blog</div>
        <div className='mx-4 menu-contant'>About us</div>
        <div className='mx-4 menu-contant'>Contact us</div>
      </div>
      <CgMenuGridO className='fs-1 m-3 hover-icon'/>
    </div>
  );
};

export default Navbar;
