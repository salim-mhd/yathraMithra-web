import React, { useEffect, useState } from "react";
import "./PackagesComponent.scss";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Package from "../package/Package";
// import axios from "axios";
// import { base_url } from "../../../constants/staticData";
import { CloseButton } from "react-bootstrap";

// import { IoBedOutline, IoMoonOutline } from "react-icons/io5";
// import { FiSun } from "react-icons/fi";
// import { ImSpoonKnife } from "react-icons/im";
// import { FaWifi } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { BsFillPinMapFill } from "react-icons/bs";

const packageMockdata = [
  {
    heading: "LEH LADAKH, NUBRA, TURTUK, PANGONG, UMLING LA, HANLE, TSO MORIRI",
    subPackage: [
      {
        day: 1,
        heading: "Leh Airport - Rest In Hotel (5 Km 10 Mints)",
        description:
          "Arrive at Leh, Meet & greet and transfer to the hotel. Relax for the rest of the day to acclimatize to the rarefied air of the high Himalayan Plateau.",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast, Lunch & Dinner at hotel, Overnight stay at the hotel in Leh)",
      },
      {
        day: 9,
        heading: "Tso Moriri to Leh (220 km) Starting at 9.30 AM",
        description:
          "Homestay in Tso Moriri - Thikse monastery - Shey palace - Rancho school - Homestay in Tso Moriri",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at the Homestay in Tso Moriri, Dinner and overnight stay at the hotel in Leh)",
      },
      {
        day: 9,
        heading: "Tso Moriri to Leh (220 km) Starting at 9.30 AM",
        description:
          "Homestay in Tso Moriri - Thikse monastery - Shey palace - Rancho school - Homestay in Tso Moriri",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at the Homestay in Tso Moriri, Dinner and overnight stay at the hotel in Leh)",
      },
    ],
    transportation:
      "Meeting and Assistance on Arrival and Departure Transport Services as per the itinerary",
    accommodation:
      "Leh Ladakh 04 Nights, Nubra Valley 02 Night, Pangong 01 Night, Hanle 01 Night, Tso Moriri 01 Night",
    permits: "Inner Line permits/ Wild Life Fees",
    MedicalSupport:
      "Medical support if needed Necessary medical/ vitamin tablets",
    costExcludes:
      "Oxygen cylinder, Flight charge, Monastery Entrance at all places of visit, Garden / Monument / Monastery Entrance fees.,Car racing activity charge (Nubra Valley), Camel Safari at Hunder (Nubra Valley), Expenses of personal nature such as Tips, Laundry, Telephone, etc., Any other SS tours not mentioned in the program.",
    OtherDetails:
      "Hotel: 3/2-star hotels and 3 -star camps, Vehicle: Traveller/ Innova/ Xylo/ XUV/ Eco van, Guide: If needed, Expected temperature: Between - 10 degrees to 18 degrees, Necessary dress: Winter Jacket, Shoes, Thermal wear, Snacks will be provided as lunch for 3 days during the six-day journey on request if needed, due to the lack of availability of cooked food. People can have food from local shops at their, own risk, as it may cause digestion problems., Oxygen masks and necessary tablets will be provided by the tour coordinator.",
    TermsAndConditions:
      "Covid-19 protocols for tourists (May change at any time), Charges for the RT-PCR test should be carried on their own., Extra medical expenses should be carried on their own., People having health issues/ Above 50/ can come at their own risk., RT-PCR test report taken 72 hours prior to the travel date is mandatory., The passengers who don’t have RT-PCR negative test reports must be vaccinated against, COVID-19, in order to visit the tourist spots/public places and must be wearing double ,",
    day: 10,
    night: 9,
    Food: "11 Breakfast, 10 Dinner, 1 Lunch, 2 water bottles per day",
    createdAt: "2024-03-07T10:15:00Z",
    updatedAt: "2024-03-07T10:15:00Z",
  },
  {
    heading: "Mountain Cabin Retreat",
    image:
      "https://i.pinimg.com/736x/6d/88/d3/6d88d303fa719726b213b4bc35d63395.jpg",
    description:
      "Cozy cabin nestled in the mountains, perfect for a serene getaway.",
    price: "800",
    orginalPrice: "1000",
    roomRating: 4.0,
    day: 3,
    night: 2,
    foodTime: 2,
    city: "Asheville",
    state: "North Carolina",
    createdAt: "2024-03-13T09:30:00Z",
    updatedAt: "2024-03-13T09:30:00Z",
  },
  {
    heading: "Cityscape Hotel Experience",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/79/45/db/pangong-tso.jpg",
    description:
      "Enjoy the hustle and bustle of the city with a stay at a luxurious downtown hotel.",
    price: "1200",
    orginalPrice: "1400",
    roomRating: 4.7,
    day: 4,
    night: 3,
    foodTime: 3,
    city: "New York City",
    state: "New York",
    createdAt: "2024-03-12T15:45:00Z",
    updatedAt: "2024-03-12T15:45:00Z",
  },
  {
    heading: "Rustic Countryside Retreat",
    image:
      "https://www.travelholicq.com/wp-content/uploads/2020/11/Places-To-Visit-In-Ladakh-scaled.jpg",
    description:
      "Experience the charm of the countryside in a cozy rustic cabin.",
    price: "600",
    orginalPrice: "800",
    roomRating: 4.2,
    day: 4,
    night: 3,
    foodTime: 2,
    city: "Sedona",
    state: "Arizona",
    createdAt: "2024-03-11T18:20:00Z",
    updatedAt: "2024-03-11T18:20:00Z",
  },
  {
    heading: "Tropical Island Paradise",
    image:
      "https://www.gofero.in//admin/webroot/img/uploads/holiday-package-gallery/1628326168_900312-vamshi-vangapally-fH-BSvYeX5g-unsplash.jpg",
    description:
      "Escape to a secluded tropical island for the ultimate relaxation experience.",
    price: "1500",
    orginalPrice: "2000",
    roomRating: 4.8,
    day: 7,
    night: 6,
    foodTime: 4,
    city: "Maui",
    state: "Hawaii",
    createdAt: "2024-03-10T11:00:00Z",
    updatedAt: "2024-03-10T11:00:00Z",
  },
  {
    heading: "Safari Adventure Camp",
    image:
      "https://alpineclubofhimalaya.com/wp-content/uploads/2021/02/beauty-of-ladakh.jpeg",
    description:
      "Embark on an unforgettable safari adventure with luxury tent accommodations.",
    price: "2000",
    orginalPrice: "2500",
    roomRating: 4.9,
    day: 10,
    night: 9,
    foodTime: 5,
    city: "Nairobi",
    state: "Kenya",
    createdAt: "2024-03-09T14:10:00Z",
    updatedAt: "2024-03-09T14:10:00Z",
  },
  {
    heading: "Historic European Castle Stay",
    image:
      "https://captureatrip.s3.amazonaws.com/uploads/blog/images/cover/Beyond_the_natural_beauty_of_Ladakh.jpg",
    description:
      "Live like royalty in a historic European castle with modern amenities.",
    price: "1800",
    orginalPrice: "2200",
    roomRating: 4.6,
    day: 6,
    night: 5,
    foodTime: 4,
    city: "Edinburgh",
    state: "Scotland",
    createdAt: "2024-03-08T16:50:00Z",
    updatedAt: "2024-03-08T16:50:00Z",
  },
  {
    heading: "LEH LADAKH, NUBRA, TURTUK, PANGONG, UMLING LA, HANLE, TSO MORIRI",
    subPackage: [
      {
        day: 9,
        heading: "Tso Moriri to Leh (220 km) Starting at 9.30 AM",
        description:
          "Homestay in Tso Moriri - Thikse monastery - Shey palace - Rancho school - Homestay in Tso Moriri",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at the Homestay in Tso Moriri, Dinner and overnight stay at the hotel in Leh)",
      },
    ],
    transportation:
      "Meeting and Assistance on Arrival and Departure Transport Services as per the itinerary",
    accommodation:
      "Leh Ladakh 04 Nights, Nubra Valley 02 Night, Pangong 01 Night, Hanle 01 Night, Tso Moriri 01 Night",
    permits: "Inner Line permits/ Wild Life Fees",
    MedicalSupport:
      "Medical support if needed Necessary medical/ vitamin tablets",
    costExcludes:
      "Oxygen cylinder, Flight charge, Monastery Entrance at all places of visit, Garden / Monument / Monastery Entrance fees.,Car racing activity charge (Nubra Valley), Camel Safari at Hunder (Nubra Valley), Expenses of personal nature such as Tips, Laundry, Telephone, etc., Any other SS tours not mentioned in the program.",
    OtherDetails:
      "Hotel: 3/2-star hotels and 3 -star camps, Vehicle: Traveller/ Innova/ Xylo/ XUV/ Eco van, Guide: If needed, Expected temperature: Between - 10 degrees to 18 degrees, Necessary dress: Winter Jacket, Shoes, Thermal wear, Snacks will be provided as lunch for 3 days during the six-day journey on request if needed, due to the lack of availability of cooked food. People can have food from local shops at their, own risk, as it may cause digestion problems., Oxygen masks and necessary tablets will be provided by the tour coordinator.",
    TermsAndConditions:
      "Covid-19 protocols for tourists (May change at any time), Charges for the RT-PCR test should be carried on their own., Extra medical expenses should be carried on their own., People having health issues/ Above 50/ can come at their own risk., RT-PCR test report taken 72 hours prior to the travel date is mandatory., The passengers who don’t have RT-PCR negative test reports must be vaccinated against, COVID-19, in order to visit the tourist spots/public places and must be wearing double ,",
    day: 10,
    night: 9,
    Food: "11 Breakfast, 10 Dinner, 1 Lunch, 2 water bottles per day",
    createdAt: "2024-03-07T10:15:00Z",
    updatedAt: "2024-03-07T10:15:00Z",
  },
  {
    heading: "Alpine Ski Resort Getaway",
    image:
      "https://captureatrip.s3.amazonaws.com/uploads/blog/images/cover/Beyond_the_natural_beauty_of_Ladakh.jpg",
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
    updatedAt: "2024-03-06T12:30:00Z",
  },
  {
    heading: "Desert Glamping Experience",
    image:
      "https://c8.alamy.com/comp/E88XP1/namgyal-tsemo-gompa-leh-ladakh-india-asia-E88XP1.jpg",
    description:
      "Experience the beauty of the desert in luxury glamping tents under the stars.",
    price: "1200",
    orginalPrice: "1500",
    roomRating: 4.4,
    day: 3,
    night: 2,
    foodTime: 2,
    city: "Sahara",
    state: "Morocco",
    createdAt: "2024-03-05T09:00:00Z",
    updatedAt: "2024-03-05T09:00:00Z",
  },
];

interface SubPackage {
  day: number;
  heading: string;
  description: string;
  image: string;
  others: string;
}

interface TourDetails {
  heading: string;
  subPackage: SubPackage[];
  transportation: string;
  accommodation: string;
  permits: string;
  MedicalSupport: string;
  costExcludes: string;
  OtherDetails: string;
  TermsAndConditions: string;
  day: number;
  night: number;
  Food: string;
  createdAt: string;
  updatedAt: string;
}

function PackagesComponent() {
  // this state for store popup status.
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  // this state for store Package Details
  const [packagesData, setPackagesData] = useState(packageMockdata);

  // this state for store selected package data
  const [selectdPackage, setSelectedPackage] = useState<TourDetails | null>(
    null
  );

  // this fuction using for show values is the popup
  const handleShowDetails = (data: any) => {
    setIsOpenPopup(true);
    setSelectedPackage(data);
  };

  // this fcunction using for fetch package Details
  // const fetPackgeDetails = async () => {
  //   let res = await axios.get(`{base_url}/package`);
  //   console.log("res", res.data.packagesDetails);
  //   let responseData = res.data.packagesDetails;
  //   setPackagesData(responseData);
  // };

  useEffect(() => {
    // fetPackgeDetails();
    console.log(packageMockdata);
    setPackagesData(packageMockdata);
  }, []);

  const navigage = useNavigate();

  return (
    <div className="PackagesComponent">
      {isOpenPopup && (
        <div className="popup-container">
          <div className="container p-3 border border-2 rounded bg-light overflow-auto popup-content">
            <div>
              <div className="text-end fs-3 fw-bolder">
                <CloseButton
                  onClick={() => {
                    setIsOpenPopup(false);
                  }}
                />
              </div>
              <div className="">
                <div className="text-center my-3">
                  <div className="my-3 fs-3 fw-bold">
                    {selectdPackage?.heading}
                  </div>
                  <div className="my-3 fs-5 fw-bold">
                    {selectdPackage?.night} Nights, {selectdPackage?.day}, Days
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center m-5 row">
                  <img
                    className="rounded view-package-image col-md-6"
                    src={selectdPackage?.subPackage[0].image}
                    alt=""
                  />
                  <div className="col-md-6">
                    <div className="my-3 fw-bold">
                      <div className="fs-3">Day 1</div>
                      <div className="fs-5">
                        Leh Airport - Rest In Hotel (5 Km 10 Mints)
                      </div>
                    </div>
                    <div className="my-3">
                      Arrive at Leh, Meet & greet and transfer to the hotel.
                      Relax for the rest of the day to acclimatize to the
                      rarefied air of the high Himalayan Plateau.
                    </div>
                    <div className="my-3">
                      (Breakfast, Lunch & Dinner at hotel, Overnight stay at the
                      hotel in Leh)
                    </div>
                  </div>
                </div>
                <div className="m-5">
                  <div className="fs-2 fw-bold text-center text-decoration-underline">Cost Includes:</div>
                  <div className="m-3">
                  <div className="my-3">
                    <div className="fs-4 fw-bold mb-1">Transportation</div>
                    <div className="m-3">
                      Meeting and Assistance on Arrival and Departure Transport
                      Services as per the itinerary
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="fs-4 fw-bold mb-1">Accommodation (2/3 Sharing)</div>
                    <div className="m-3">
                    <div>Leh Ladakh 04 Nights</div>
                    <div>Leh Ladakh 04 Nights</div>
                    <div>Leh Ladakh 04 Nights</div>
                    <div>Leh Ladakh 04 Nights</div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="fs-4 fw-bold mb-1">Food/Person</div>
                    <div className="m-3">
                      <div>11 Breakfast</div>
                      <div>10 Dinner</div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="fs-4 fw-bold mb-1">Permits and Entry fees</div>
                    <div className="m-3">Inner Line permits/ Wild Life Fees</div>
                  </div>
                  <div className="my-3">
                    <div className="fs-4 fw-bold mb-1">Medical support</div>
                    <div className="m-3">
                      Medical support if needed Necessary medical/ vitamin
                      tablets
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="fs-4 fw-bold mb-1">Cost Excludes</div>
                    <div className="m-3">
                      <div>Oxygen cylinder</div>
                      <div>Flight charge</div>
                      <div>Monastery Entrance at all places of visit</div>
                      <div>Oxygen cylinder</div>
                    </div>
                    <div className="my-3">
                      <div className="fs-4 fw-bold mb-1">Other details</div>
                      <div className="m-3">
                      <div>Hotel: 3/2-star hotels and 3 -star camps</div>
                      <div>Vehicle: Traveller/ Innova/ Xylo/ XUV/ Eco van</div>
                      </div>
                    </div>
                    <div className="text-center my-5">
                      <div className="fs-4 fw-bold mb-1">Terms and conditions</div>
                      <p>
                        Covid-19 protocols for tourists (May change at any time)
                        Charges for the RT-PCR test should be carried on their
                        own. Extra medical expenses should be carried on their
                        own. People having health issues/ Above 50/ can come at
                        their own risk. RT-PCR test report taken 72 hours prior
                        to the travel date is mandatory. The passengers who
                        don’t have RT-PCR negative test reports must be
                        vaccinated against COVID-19, in order to visit the
                        tourist spots/public places and must be wearing double
                        masks
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="text-center my-5">
                <button
                  className="button"
                  onClick={() => {
                    navigage("/contact");
                  }}
                >
                  Contact Us
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="my-3">
        <div className="heading-container">
          <div>
            <div className="heading">New Packages</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
          <div className="d-flex align-itmes-center my-2">
            <div className="icon-left me-3">
              <IoIosArrowRoundBack />
            </div>
            <div className="icon-right">
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="packages">
            {packagesData.map((data: any, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleShowDetails(data);
                  }}
                >
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
      </div>

      <div className="my-3">
        <div className="heading-container">
          <div>
            <div className="heading">New Packages</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
          <div className="d-flex align-itmes-center my-2">
            <div className="icon-left me-3">
              <IoIosArrowRoundBack />
            </div>
            <div className="icon-right">
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="packages">
            {packagesData.map((data: any, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleShowDetails(data);
                  }}
                >
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
      </div>
    </div>
  );
}

export default PackagesComponent;
