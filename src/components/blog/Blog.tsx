import React from 'react'
import './Blog.scss'
import { FaArrowRightLong } from 'react-icons/fa6'
import image from '../../assets/package images/ledakh-3.jpeg'

export default function Blog() {
  return (
    <div className='Blog'>
            <img src={image} alt="Image" className='image' />
        <div className='content'>
        <div className='fs-6 fw-bold' style={{color:'gray'}}>28-Feb-2024</div>
        <div className='my-2'>
        <div className='heading'>Vegetables on sale at the market,</div>
            <div>Donec blandit nisi in lectus euismod, vel dictum odio dapibus. <br /> Aenean ac vulputate erat. Nam nec urna nunc. </div>
        </div>
            <div className='read-more-container'><div className='me-2'>Read More</div><div><FaArrowRightLong /></div></div>
        </div>
    </div>
  )
}
