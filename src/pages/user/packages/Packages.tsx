import React, { useEffect, useState } from "react";
import "./Packages.scss";
import Navbar from "../../../components/user/navbar/Navbar";
import Package from "../../../components/user/package/Package";
import Footer from "../../../components/user/footer/Footer";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { packageInterface } from "../../../interface/Interface";
import { base_url } from "../../../constants/staticData";
import axios from "axios";

export default function Packages() {
  // this state for store Package Details
  const [packagesData, setPackagesData] = useState<packageInterface[]>([]);

  // this fcunction using for fetch package Details
  const fetPackgeDetails = async () => {
    let res = await axios.get(`${base_url}/package`);
    console.log("res", res.data.packagesDetails);
    let responseData = res.data.packagesDetails;
    setPackagesData(responseData);
  };

  useEffect(() => {
    fetPackgeDetails();
  }, []);

  return (
    <div className="Packages">
      <Navbar option={"packages"} />
      <div className="package-container">
        <div className="package-heading-container">
          <div className="heading">All Packages</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className="d-flex align-items-center justify-content-between mx-5">
          <div className="fs-5 fw-bold">1000 - 2000</div>
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

        <div className="d-flex align-items-center flex-wrap justify-content-center">
          {packagesData.map((data: any) => {
            return (
              <div>
                <Package
                  heading={data.heading}
                  image={data.image}
                  description={data.description}
                  price={data.price}
                  orginalPrice={""}
                  roomRating={0}
                  day={0}
                  night={0}
                  foodTime={0}
                  city={""}
                  state={""}
                  createdAt={""}
                  updatedAt={""}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
