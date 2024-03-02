import React from 'react'
import './Welcome.scss'
import image1 from '../../assets/package images/ladakh.jpeg'
import image2 from '../../assets/package images/ledakh-3.jpeg'

export default function Welcome() {
  return (
    <div className='Welcome'>
        <div className='text-container mb-3'>
            <div className='heading'>Welcome Our <br/> Ladakh Mitra</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo rem repudiandae enim porro nulla provident eos molestias sit illum mollitia deserunt voluptatibus corporis ut, nihil ducimus voluptatem harum velit distinctio!</div>
        </div>
        <div className='images'>
            <div><img src={image1} alt="image-1"  className='image-1'/></div>
            <div><img src={image2} alt="image-2"  className='image-2'/></div>
        </div>
    </div>
  )
}
