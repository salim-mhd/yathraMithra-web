import React from 'react'
import './Welcome.scss'
import image1 from '../../../assets/package images/ladakh.jpeg'
import image2 from '../../../assets/package images/ledakh-3.jpeg'

export default function Welcome() {
  return (
    <div className='Welcome'>
        <div className='text-container mb-3'>
            <div className='heading'>Welcome To <br/> Yathra Mitra</div>
            <div className='p-3'>At Yathra Mithra, they offer a range of packages tailored to specific locations, ensuring that the travelers receive personalized experiences that cater to their unique preferences and needs. Whether it's crafting a customized itinerary or providing expert advice, Sudeesh and Joshna are dedicated to empowering travelers and ensuring that they embark on unforgettable journeys with confidence and ease. Feel free to reach out anytime for their valuable insights and unwavering support.</div>
        </div>
        <div className='images'>
            <div><img src={image1} alt=""  className='image-1'/></div>
            <div><img src={image2} alt=""  className='image-2'/></div>
        </div>
    </div>
  )
}
