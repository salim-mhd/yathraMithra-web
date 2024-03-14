import React from 'react'
import './Package.scss'

// import { BsFillPinMapFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { IoBedOutline, IoMoonOutline } from 'react-icons/io5';
import { FiSun } from "react-icons/fi";
import { FaWifi } from 'react-icons/fa';

interface packageProps {
  heading:string,
  image:string,
  description:string,
  price: string,
  orginalPrice : string,
  roomRating : number,
  day : number,
  night : number,
  foodTime : number,
  city: string,
  state: string,
  createdAt: string;
  updatedAt: string;
}

const Package: React.FC<packageProps> = ({ heading, image, description, price, orginalPrice, roomRating, day, night, foodTime, city, state}) => {

  return (
    <div className='Package m-4' role='button'>
        <img src={image} className='package-image' alt="" />
      <div className='px-3'>
      <div className='my-1'>
      <div className='d-flex align-items-center'>
        {/* <div className='fs-4 me-2'>₹ {orginalPrice}</div>
        <div className='text-decoration-line-through'>₹ {price}</div> */}
        <div className='fs-5 py-2 package-heading'>{heading}</div>
      </div>
      <div className='badge-container my-1'>
        <div className='badge'><IoBedOutline className='me-1 fs-6'/> <div>{roomRating} Star</div></div>
        <div className='badge'><FiSun className='me-1 fs-6' /> <div>{day} Day</div></div>
        <div className='badge'><IoMoonOutline className='me-1 fs-6' /> <div>{night} Night</div></div>
        <div className='badge'><ImSpoonKnife className='me-1 fs-6' /> <div>{foodTime} Time</div></div>
        <div className='badge'><FaWifi className='me-1 fs-6' /> <div>Free</div></div>
      </div>
      </div>
      {/* <div className='mt-2 d-flex align-items-center'><BsFillPinMapFill  className='me-2'/> <div>{city}, {state}</div></div> */}
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

export default Package;
