import React from 'react'
import "./Packages.scss"
import Navbar from '../../components/navbar/Navbar'
import Package from '../../components/package/Package'
import Footer from '../../components/footer/Footer'
import ReactPaginate from 'react-paginate'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Packages() {
  return (
    <div className='Packages'>
      <Navbar option={'packages'}/>
      <div className='package-container'>
      <div className='package-heading-container'>
        <div className='heading'>All Packages</div>
        <div >Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className='d-flex align-items-center justify-content-between mx-5'>
  <div className='fs-5 fw-bold'>1000 - 2000</div>
  {/* Pagination */}
  <ReactPaginate
    previousLabel={<FaArrowLeft />}
    nextLabel={<FaArrowRight />}
    breakLabel={"..."}
    breakClassName={"break-me"}
    pageCount={0}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    // onPageChange={handlePaginationClick}
    containerClassName={"pagination"}
    activeClassName={"active"}
  />
</div>

        <div className='d-flex align-items-center flex-wrap justify-content-center'>
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
