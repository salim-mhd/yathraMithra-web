import React from 'react'
import './Welcome.scss'
import image1 from '../../assets/package images/ladakh.jpeg'
import image2 from '../../assets/package images/ledakh-3.jpeg'

export default function Welcome() {
  return (
    <div className='Welcome'>
        <div className='text-container mb-3'>
            <div className='heading'>Welcome To <br/> Yathra Mitra</div>
            <div>Yathra Mithra is more than just a travel solution website; it's a passion project born from the adventurous spirits of Sudeesh and Joshna. Originally from the lush landscapes of Munnar, Kerala, they now call the rugged terrain of Leh Ladakh home. Their intimate connection with these diverse environments fuels their mission to support and guide travelers seeking extra care and support in destinations like Ladakh, Srinagar, and beyond. Sudeesh's love for mountaineering has taken him to the summits of numerous peaks in India and neighboring countries, providing him with invaluable insights into the challenges and rewards of high-altitude travel. Meanwhile, Joshna's background as a sports journalist and writer ignites her curiosity to explore the world, exemplified by her epic solo journey across India on a two-wheeler Activa. At Yathra Mithra, they offer a range of packages tailored to specific locations, ensuring travelers receive personalized experiences that cater to their unique preferences and needs. Whether it's crafting a customized itinerary or providing expert advice, Sudeesh and Joshna are dedicated to empowering travelers and ensuring they embark on unforgettable journeys with confidence and ease. Feel free to reach out anytime for their valuable insights and unwavering support.</div>
        </div>
        <div className='images'>
            <div><img src={image1} alt=""  className='image-1'/></div>
            <div><img src={image2} alt=""  className='image-2'/></div>
        </div>
    </div>
  )
}
