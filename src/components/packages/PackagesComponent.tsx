import React from 'react'
import "./PackagesComponent.scss"
import { FaArrowLeft, FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import Package from '../package/Package';

function PackagesComponent() {
  return (
    <div className='PackagesComponent'>
        <div className='heading-container my-2'>
        <div>
        <div className='heading'>New Packages</div>
        <div >Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className='d-flex align-itmes-center my-2'>
        <div className='icon-left me-3'><IoIosArrowRoundBack/></div>
        <div className='icon-right'><IoIosArrowRoundForward/></div>
        </div>
        </div>
        <div className='container'>
        <div className='packages'>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
          <Package/>
        </div>
        </div>
    </div>
  )
}

export default PackagesComponent;