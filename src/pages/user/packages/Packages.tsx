import React, { useEffect, useState } from "react";
import "./Packages.scss";
import Navbar from "../../../components/user/navbar/Navbar";
import Package from "../../../components/user/package/Package";
import Footer from "../../../components/user/footer/Footer";
import ReactPaginate from "react-paginate";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { packageInterface } from "../../../interface/Interface";
// import { base_url } from "../../../constants/staticData";
// import axios from "axios";

const packageMockdata = [
  {
    heading: "LEH LADAKH, NUBRA, TURTUK, PANGONG, UMLING LA, HANLE, TSO MORIRI",
    image: "https://luxuryescapes.com/inspiration/wp-content/uploads/2023/07/AdobeStock_603464271-scaled.jpeg",
    description: "Escape to a luxury beach resort with breathtaking ocean views.",
    price: "1000",
    orginalPrice: "1500",
    roomRating: 4.5,
    day: 5,
    night: 4,
    foodTime: 3,
    city: "Miami",
    state: "Florida",
    createdAt: "2024-03-14T12:00:00Z",
    updatedAt: "2024-03-14T12:00:00Z"
  },
  {
    heading: "Mountain Cabin Retreat",
    image: "https://i.pinimg.com/736x/6d/88/d3/6d88d303fa719726b213b4bc35d63395.jpg",
    description: "Cozy cabin nestled in the mountains, perfect for a serene getaway.",
    price: "800",
    orginalPrice: "1000",
    roomRating: 4.0,
    day: 3,
    night: 2,
    foodTime: 2,
    city: "Asheville",
    state: "North Carolina",
    createdAt: "2024-03-13T09:30:00Z",
    updatedAt: "2024-03-13T09:30:00Z"
  },
  {
    heading: "Cityscape Hotel Experience",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/79/45/db/pangong-tso.jpg",
    description: "Enjoy the hustle and bustle of the city with a stay at a luxurious downtown hotel.",
    price: "1200",
    orginalPrice: "1400",
    roomRating: 4.7,
    day: 4,
    night: 3,
    foodTime: 3,
    city: "New York City",
    state: "New York",
    createdAt: "2024-03-12T15:45:00Z",
    updatedAt: "2024-03-12T15:45:00Z"
  },
  {
    heading: "Rustic Countryside Retreat",
    image: "https://www.travelholicq.com/wp-content/uploads/2020/11/Places-To-Visit-In-Ladakh-scaled.jpg",
    description: "Experience the charm of the countryside in a cozy rustic cabin.",
    price: "600",
    orginalPrice: "800",
    roomRating: 4.2,
    day: 4,
    night: 3,
    foodTime: 2,
    city: "Sedona",
    state: "Arizona",
    createdAt: "2024-03-11T18:20:00Z",
    updatedAt: "2024-03-11T18:20:00Z"
  },
  {
    heading: "Tropical Island Paradise",
    image: "https://www.gofero.in//admin/webroot/img/uploads/holiday-package-gallery/1628326168_900312-vamshi-vangapally-fH-BSvYeX5g-unsplash.jpg",
    description: "Escape to a secluded tropical island for the ultimate relaxation experience.",
    price: "1500",
    orginalPrice: "2000",
    roomRating: 4.8,
    day: 7,
    night: 6,
    foodTime: 4,
    city: "Maui",
    state: "Hawaii",
    createdAt: "2024-03-10T11:00:00Z",
    updatedAt: "2024-03-10T11:00:00Z"
  },
  {
    heading: "Safari Adventure Camp",
    image: "https://alpineclubofhimalaya.com/wp-content/uploads/2021/02/beauty-of-ladakh.jpeg",
    description: "Embark on an unforgettable safari adventure with luxury tent accommodations.",
    price: "2000",
    orginalPrice: "2500",
    roomRating: 4.9,
    day: 10,
    night: 9,
    foodTime: 5,
    city: "Nairobi",
    state: "Kenya",
    createdAt: "2024-03-09T14:10:00Z",
    updatedAt: "2024-03-09T14:10:00Z"
  },
  {
    heading: "Historic European Castle Stay",
    image: "https://i.natgeofe.com/n/dc3aab5b-3376-4467-91ea-ac0f556802fa/ladakh-india02_4x3.jpg?w=1440&h=1080",
    description: "Live like royalty in a historic European castle with modern amenities.",
    price: "1800",
    orginalPrice: "2200",
    roomRating: 4.6,
    day: 6,
    night: 5,
    foodTime: 4,
    city: "Edinburgh",
    state: "Scotland",
    createdAt: "2024-03-08T16:50:00Z",
    updatedAt: "2024-03-08T16:50:00Z"
  },
  {
    heading: "Coastal Cliffside Retreat",
    image: "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
    description: "Relax in a luxurious coastal retreat perched on the edge of a cliff.",
    price: "1400",
    orginalPrice: "1800",
    roomRating: 4.7,
    day: 5,
    night: 4,
    foodTime: 3,
    city: "Big Sur",
    state: "California",
    createdAt: "2024-03-07T10:15:00Z",
    updatedAt: "2024-03-07T10:15:00Z"
  },
  {
    heading: "Alpine Ski Resort Getaway",
    image: "https://captureatrip.s3.amazonaws.com/uploads/blog/images/cover/Beyond_the_natural_beauty_of_Ladakh.jpg",
    description: "Hit the slopes and unwind at a luxurious alpine ski resort.",
    price: "1600",
    orginalPrice: "2000",
    roomRating: 4.5,
    day: 4,
    night: 3,
    foodTime: 3,
    city: "Vail",
    state: "Colorado",
    createdAt: "2024-03-06T12:30:00Z",
    updatedAt: "2024-03-06T12:30:00Z"
  },
  {
    heading: "Desert Glamping Experience",
    image: "https://c8.alamy.com/comp/E88XP1/namgyal-tsemo-gompa-leh-ladakh-india-asia-E88XP1.jpg",
    description: "Experience the beauty of the desert in luxury glamping tents under the stars.",
    price: "1200",
    orginalPrice: "1500",
    roomRating: 4.4,
    day: 3,
    night: 2,
    foodTime: 2,
    city: "Sahara",
    state: "Morocco",
    createdAt: "2024-03-05T09:00:00Z",
    updatedAt: "2024-03-05T09:00:00Z"
  }
];

export default function Packages() {
  // this state for store Package Details
  const [packagesData, setPackagesData] = useState(packageMockdata);

  // this fcunction using for fetch package Details
  // const fetPackgeDetails = async () => {
  //   let res = await axios.get(`${base_url}/package`);
  //   console.log("res", res.data.packagesDetails);
  //   let responseData = res.data.packagesDetails;
  //   setPackagesData(responseData);
  // };

  useEffect(() => {
    // fetPackgeDetails();
    setPackagesData(packageMockdata);
  }, []);

  return (
    <div className="Packages">
      <Navbar option={"packages"} />
      <div className="package-container">
        <div className="package-heading-container">
          <div className="heading">All Packages</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className="d-flex align-items-center justify-content-end mx-5">
          {/* <div className="fs-5 fw-bold">Package</div> */}
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

        <div className="d-flex mb-5 align-items-center flex-wrap justify-content-center">
          {packagesData.map((data: any) => {
            return (
              <div>
                <Package
               heading={data.heading}
               image={data.image}
               description={data.description}
               price={data.price}
               orginalPrice={data.orginalPrice}
               roomRating={data.roomRating}
               day={data.day}
               night={data.night}
               foodTime={data.foodTime}
               city={data.city}
               state={data.state}
               createdAt={data.createAt}
               updatedAt={data.updatedAt}
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
