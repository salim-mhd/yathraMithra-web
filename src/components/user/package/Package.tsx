import React from 'react'
import './Package.scss'

import { BsFillPinMapFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { IoBedOutline, IoMoonOutline } from 'react-icons/io5';
import { FiSun } from "react-icons/fi";
import { FaWifi } from 'react-icons/fa';


export default function Package() {
  return (
    <div className='Package m-4' role='button'>
      <div className='package-image'>
      </div>
      <div className='px-3'>
      <div className='my-1'>
      <div className='d-flex align-items-center'>
        <div className='fs-4 me-2'>₹ 7,000</div>
        <div className='text-decoration-line-through'>₹ 10,000</div>
      </div>
      <div className='badge-container my-1'>
        <div className='badge'><IoBedOutline className='me-1 fs-6'/> <div>5 Star</div></div>
        <div className='badge'><FiSun className='me-1 fs-6' /> <div>2 Day</div></div>
        <div className='badge'><IoMoonOutline className='me-1 fs-6' /> <div>3 Night</div></div>
        <div className='badge'><ImSpoonKnife className='me-1 fs-6' /> <div>3 Time</div></div>
        <div className='badge'><FaWifi className='me-1 fs-6' /> <div>Free</div></div>
      </div>
      </div>
      <div className='mt-2 d-flex align-items-center'><BsFillPinMapFill  className='me-2'/> <div>Location, India</div></div>
      <hr />
            {/* <div className='d-flex justify-content-end'><button className='button'>More</button></div> */}
            <div className='Expore-div'>
              <div>Learn More</div>
              <MdKeyboardArrowRight className='fs-5'/>
            </div>
      </div>
    </div>
  )
}

