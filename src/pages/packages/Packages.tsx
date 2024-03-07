import React from 'react'
import "./Packages.scss"
import Navbar from '../../components/navbar/Navbar'
import Package from '../../components/package/Package'
import Footer from '../../components/footer/Footer'

export default function Packages() {
  return (
    <div className='Packages'>
      <Navbar option={'packages'}/>
      <div className='package-container'>
      <div className='package-heading-container'>
        <div className='heading'>All Packages</div>
        <div >Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className='d-flex align-items-center flex-wrap justify-content-center my-5'>
          <div>
          <Package/>
          </div>
          <div>
          <Package/>
          </div>
          <div>
          <Package/>
          </div>
          <div>
          <Package/>
          </div>
          <div>
          <Package/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
