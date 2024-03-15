import React, { useEffect, useState } from "react";
import "./PackagesComponent.scss";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Package from "../package/Package";
// import axios from "axios";
// import { base_url } from "../../../constants/staticData";
// import { CloseButton } from "react-bootstrap";

// import { IoBedOutline, IoMoonOutline } from "react-icons/io5";
// import { FiSun } from "react-icons/fi";
// import { ImSpoonKnife } from "react-icons/im";
// import { FaWifi } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { BsFillPinMapFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const packageMockdata = [
  {
    heading: "LEH LADAKH, NUBRA, PANGONG",
    subPackage: [
      {
        day: 1,
        heading: "Leh Airport - Rest In Hotel (5 Km 10 Mints)",
        description:
          "Arrive at Leh, Meet & greet and transfer to the hotel. Relax for the rest of the day to acclimatize to the rarefied air of the high Himalayan Plateau.",
        image:
          "https://www.kosha.co/journal/wp-content/uploads/2021/11/Leh-in-Winter.jpg",
        others:
          "(Breakfast, Lunch & Dinner at hotel, Overnight stay at the hotel in Leh)",
      },
      {
        day: 2,
        heading: "Leh Local Sightseeing.",
        description:
          "Leh hotel - Shanti Stupa – Leh Palace - Pathar Sahib Gurudwara - Magnetic Hill - Sangam - Spituk Monastery - Hall of fame - Stay at Hotel in Leh",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast & Dinner and overnight stay at the hotel in Leh)",
      },
      {
        day: 3,
        heading: "Leh - Nubra Valley (125 Kms) Via Kartungla pass Starting at 8.30 AM",
        description:
          "Leh hotel - Kartungla Pass 18380 ft (Highest motor ridable point in the world) - Car / Bike racing - Double Humped Camel Ride Hunder - Nubra Camp/ Hotel",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at the hotel in Leh, Dinner and overnight stay at the Camp/ Hotel in Nubra, Lunch will be basic veg-food on the way to Nubra)",
      },
      {
        day: 4,
        heading: "Nubra Vally to Pangong lake (145 km) Starting at 10.30 AM",
        description:
          "Nubra Camp/ Hotel - Diskit Monastery - Agham Shyok Road - Indus Valley - Pangong Lake - Camp/ Hotel at Pangong",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at Nubra Camp/ Hotel, Dinner and overnight stay at the Camp/ Hotel in Pangong, Lunch will be basic veg-food on the way to Pangong)",
      },
      {
        day: 5,
        heading: "Pangong to Leh (180 km) Starting at 9.30 AM",
        description:
          "Camp/ Hotel at Pangong - Spangmik Glacier - Snow Capped Peaks - Chang La Pass of 17380 ft - Thikse monastery - Rancho School - Leh Hotel",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at Pangong Camp/ Hotel, Dinner and overnight stay at the hotel in Leh, Lunch will be basic veg-food on the way to Leh)",
      },
      {
        day: 6,
        heading: "Airport Drop (5 Km 10 Mints)",
        description:
          "After breakfast, Airport drop",
      },
    ],
    transportation:
      "Meeting and Assistance on Arrival and Departure Transport Services as per the itinerary",
    accommodation:
      "Leh Ladakh: 3 Nights at a 3-star hotel., Nubra Valley: 1 Night at a 3-star categorised hotel, but less impressive compared to the hotel in Leh due to location limitations., Pangong: 1 Night at a 3-star hotel, considered the best in the area but not as impressive compared to the hotel in Leh due to location constraints.",
    permits: "Inner Line permits/ Wild Life Fees Entry fees (Palace, Shanthi Stoopa, Diskit Monastery, Hall of Fame)",
    MedicalSupport:
      "Oxygen cylinder, 1 per vehicle, Medical support if needed, Necessary medical/ vitamin tablets",
    costExcludes:
      "Flight charge, Car racing activity charge (Nubra Valley), Camel Safari at Hunder (Nubra Valley), Expenses of personal nature such as Tips, Laundry, Telephone etc., Any other tours not mentioned in the program.",
    OtherDetails:
      "Hotel: 3-star hotels, Vehicle: Traveller for tour, Eco wan for Airport pick up and Drop, Expected temperature: Between -2 degrees to 15 degrees (April, May), Necessary dress: Winter Jacket, Shoes, Thermal wear, Shades, lip balm, cold cream, Snacks will be provided on request if needed.",
    TermsAndConditions:
      "Covid-19 protocols for tourists (May change at any time), Charges for the RT-PCR test should be carried on their own., Extra medical expenses should be carried on their own., People having health issues/ Above 50/ can come at their own risk., RT-PCR test report taken 72 hours prior to the travel date is mandatory., The passengers who don’t have RT-PCR negative test reports must be vaccinated against, COVID-19, in order to visit the tourist spots/public places and must be wearing double masks,",
    day: 6,
    night: 5,
    food: "6 Breakfast, 5 Dinner, 5 Lunch, 2 water bottles per day, NB: Food in Nubra and Pangong will be vegetarian cuisine",
    createdAt: "2024-03-07T10:15:00Z",
    updatedAt: "2024-03-07T10:15:00Z",
  },
  {
    heading: "LEH LADAKH, NUBRA, TURTUK, PANGONG",
    subPackage: [
      {
        day: 1,
        heading: "Leh Airport - Rest In Hotel (5 Km 10 Mints)",
        description:
          "Arrive at Leh, Meet & greet and transfer to the hotel. Relax for the rest of the day to acclimatize to the rarefied air of the high Himalayan Plateau.",
        image:
          "https://www.kosha.co/journal/wp-content/uploads/2021/11/Leh-in-Winter.jpg",
        others:
          "(Breakfast, Lunch & Dinner at hotel, Overnight stay at the hotel in Leh)",
      },
      {
        day: 2,
        heading: "Leh Local Sightseeing.",
        description:
          "Leh hotel - Shanti Stupa – Leh Palace - Pathar Sahib Gurudwara - Magnetic Hill - Sangam - Spituk Monastery - Hall of fame - Stay at Hotel in Leh",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast & Dinner and overnight stay at the hotel in Leh)",
      },
      {
        day: 3,
        heading: "Leh - Nubra Valley (125 Kms) Via Kartungla pass Starting at 8.30 AM",
        description:
          "Leh hotel - Kartungla Pass 18380 ft (Highest motor ridable point in the world) - Car / Bike racing - Double Humped Camel Ride Hunder - Nubra Camp/ Hotel",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at the camp/ hotel in Leh, Dinner and overnight stay at the camp/ hotel in Nubra)",
      },
      {
        day: 4,
        heading: "Nubra Valley (165 Kms) to Turtuk Starting at 8.30 AM",
        description:
          "Nubra Camp - Turtuk village - Nubra Camp",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at the Nubra Camp, Snacks in the middle of the journey, Dinner and overnight stay at the camp/ hotel in Nubra)",
      },
      {
        day: 5,
        heading: "Nubra Vally to Pangong lake (145 km) Starting at 10.30 AM",
        description:
          "Nubra camp/ hotel - Diskit Monastery - Agham Shyok Road - Indus Valley - Pangong Lake - camp/ hotel at Pangong",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at Nubra camp/ hotel, Dinner and overnight stay at the camp/ hotel in Pangong)",
      },
      {
        day: 6,
        heading: "Pangong to Leh (180 km) Starting at 9.30 AM",
        description:
          "Camp/ hotel at Pangong - Spangmik Glacier -cSnow‐Capped Peaks - Chang La Pass of 17380 ft - Thikse monastery - Rancho School - Leh market visit - Leh Hotel",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at Pangong camp/ hotel, Dinner and overnight stay at the hotel in Leh)",
      },
      {
        day: 7,
        heading: "Airport Drop (5 Km 10 Mints)",
        description:
          "After breakfast, Airport drop",
      },
    ],
    transportation:
      "Meeting and Assistance on Arrival and Departure Transport Services as per the itinerary",
    accommodation:
      "Leh Ladakh 03 Nights, Nubra Valley 02 Night, Pangong 01 Night",
    permits: "Inner Line permits/ Wild Life Fees",
    MedicalSupport:
      "Medical support if needed, Necessary medical/ vitamin tablets",
    costExcludes:
      "Oxygen cylinder, Flight charge, Monastery Entrance at all places of visit, Garden / Monument / Monastery Entrance fees., Car racing activity charge (Nubra Valley), Camel Safari at Hunder (Nubra Valley), Expenses of personal nature such as Tips, Laundry, Telephone, etc., Any other SS tours not mentioned in the program.",
    OtherDetails:
      "Hotel: 4/3/2-star hotels and 3/2-star camps, Vehicle: Traveller/ Innova/ Xylo/ XUV/ Eco van/ Bike, Guide: If needed, Expected temperature: Between -5 degrees to 10 degrees, Necessary dress: Winter Jacket, Shoes, Thermal wear, Snacks will be provided as lunch for 3 days during the six-day journey on request if needed due to the lack of availability of cooked food. People can have food from local shops at their own risk, as it may cause digestion problems., Oxygen masks and necessary tablets will be provided by the tour coordinator.",
    TermsAndConditions:
      "Covid-19 protocols for tourists (May change at any time), Charges for the RT-PCR test should be carried on their own., Extra medical expenses should be carried on their own., People having health issues/ Above 50/ can come at their own risk., RT-PCR test report taken 72 hours prior to the travel date is mandatory., The passengers who don’t have RT-PCR negative test reports must be vaccinated against, COVID-19, in order to visit the tourist spots/public places and must be wearing double masks,",
    day: 7,
    night: 6,
    food: "7 Breakfast, 6 Dinner, 1 Lunch, 2 water bottles per day",
    createdAt: "2024-03-07T10:15:00Z",
    updatedAt: "2024-03-07T10:15:00Z",
  },
  {
    heading: "LEH LADAKH, NUBRA, TURTUK, PANGONG, UMLING LA, HANLE, TSO MORIRI",
    subPackage: [
      {
        day: 1,
        heading: "Leh Airport - Rest In Hotel (5 Km 10 Mints)",
        description:
          "Arrive at Leh, Meet & greet and transfer to the hotel. Relax for the rest of the day to acclimatize to the rarefied air of the high Himalayan Plateau.",
        image:
          "https://www.kosha.co/journal/wp-content/uploads/2021/11/Leh-in-Winter.jpg",
        others:
          "(Breakfast, Lunch & Dinner at hotel, Overnight stay at the hotel in Leh)",
      },
      {
        day: 2,
        heading: "Leh Local Sightseeing.",
        description:
          "Leh hotel - Shanti Stupa – Leh Palace - Market visit - Stay at hotel in Leh",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast, dinner and overnight stay at the hotel in Leh)",
      },
      {
        day: 3,
        heading: "Leh - Drass - Leh",
        description:
          "Leh hotel - Lamayuru- Kargil - Drass - Leh hotel",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast in Leh hotel & Dinner and overnight stay at the hotel in Leh)",
      },
      {
        day: 4,
        heading: "Leh - Nubra Valley (125 Kms) Via Kartungla pass Starting at 8.30 AM",
        description:
          "Leh hotel - Kartungla Pass 18380 ft (Highest motor ridable point in the world) - Car / Bike racing - Double Humped Camel Ride - Nubra Camp in Hunder",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at the Homestay in Stok, Dinner and overnight stay at the camp in Hunder, Nubra)",
      },
      {
        day: 5,
        heading: "Nubra Valley (90+90 Kms) to Turtuk - Nubra Valley Starting at 8.30 AM",
        description:
          "Nubra Camp - Turtuk village - Nubra Camp",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at the Nubra Camp, Snacks in the middle of the journey, Dinner and overnight stay at the camp in Nubra)",
      },
      {
        day: 6,
        heading: "Nubra Vally to Pangong lake (175 km) Starting at 9.30 AM",
        description:
          "Nubra Camp - Diskit Monastery - Agham Shyok Road - Indus Valley - Pangong Lake - Camp at Pangong, Tangse",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at Nubra Camp, Dinner and overnight stay at Hotel at Pangong, Tangse)",
      },
      {
        day: 7,
        heading: "Tangse, Pangong to Hanleh (180 km) Starting at 9.00 AM",
        description:
          "Hotel at Tanste, Pangong - Hanleh Homestay",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at Hotel at Pangong, Dinner and overnight stay at Hanleh Homestay)",
      },
      {
        day: 8,
        heading: "Hanle to Umling la to Tso Moriri (80km + 80km + 160km) Starting at 9.30 AM",
        description:
          "Homestay in Hanle - Umling la - Homestay in Tso Moriri",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at Hotel in Hanle, Dinner and overnight stay at the homestay in Tso Moriri)",
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
        day: 10,
        heading: "Airport Drop (5 Km 10 Mints)",
        description:
          "After breakfast, Airport drop",
      },
    ],
    transportation:
      "Meeting and Assistance on Arrival and Departure Transport Services as per the itinerary",
    accommodation:
      "Leh Ladakh 04 Nights, Nubra Valley 02 Night, Pangong 01 Night, Hanle 01 Night, Tso Moriri 01 Night",
    permits: "Inner Line permits/ Wild Life Fees",
    MedicalSupport:
      "Medical support if needed, Necessary medical/ vitamin tablets",
    costExcludes:
      "Oxygen cylinder, Flight charge, Monastery Entrance at all places of visit, Garden / Monument / Monastery Entrance fees., Car racing activity charge (Nubra Valley), Camel Safari at Hunder (Nubra Valley), Expenses of personal nature such as Tips, Laundry, Telephone, etc., Any other SS tours not mentioned in the program.",
    OtherDetails:
      "Hotel: 3/2-star hotels and 3 -star camps, Vehicle: Traveller/ Innova/ Xylo/ XUV/ Eco van, Guide: If needed, Expected temperature: Between - 10 degrees to 18 degrees, Necessary dress: Winter Jacket, Shoes, Thermal wear, Snacks will be provided as lunch for 3 days during the six-day journey on request if needed, due to the lack of availability of cooked food. People can have food from local shops at their, own risk, as it may cause digestion problems., Oxygen masks and necessary tablets will be provided by the tour coordinator.",
    TermsAndConditions:
      "Covid-19 protocols for tourists (May change at any time), Charges for the RT-PCR test should be carried on their own., Extra medical expenses should be carried on their own., People having health issues/ Above 50/ can come at their own risk., RT-PCR test report taken 72 hours prior to the travel date is mandatory., The passengers who don’t have RT-PCR negative test reports must be vaccinated against, COVID-19, in order to visit the tourist spots/public places and must be wearing double masks,",
    day: 10,
    night: 9,
    food: "11 Breakfast, 10 Dinner, 1 Lunch, 2 water bottles per day",
    createdAt: "2024-03-07T10:15:00Z",
    updatedAt: "2024-03-07T10:15:00Z",
  },
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
        day: 2,
        heading: "Leh Local Sightseeing.",
        description:
          "Leh hotel - Shanti Stupa – Leh Palace - Market visit - Stay at hotel in Leh",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast, dinner and overnight stay at the hotel in Leh)",
      },
      {
        day: 3,
        heading: "Leh - Drass - Leh",
        description:
          "Leh hotel - Lamayuru- Kargil - Drass - Leh hotel",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast in Leh hotel & Dinner and overnight stay at the hotel in Leh)",
      },
      {
        day: 4,
        heading: "Leh - Nubra Valley (125 Kms) Via Kartungla pass Starting at 8.30 AM",
        description:
          "Leh hotel - Kartungla Pass 18380 ft (Highest motor ridable point in the world) - Car / Bike racing - Double Humped Camel Ride - Nubra Camp in Hunder",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at the Homestay in Stok, Dinner and overnight stay at the camp in Hunder, Nubra)",
      },
      {
        day: 5,
        heading: "Nubra Valley (90+90 Kms) to Turtuk - Nubra Valley Starting at 8.30 AM",
        description:
          "Nubra Camp - Turtuk village - Nubra Camp",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at the Nubra Camp, Snacks in the middle of the journey, Dinner and overnight stay at the camp in Nubra)",
      },
      {
        day: 6,
        heading: "Nubra Vally to Pangong lake (175 km) Starting at 9.30 AM",
        description:
          "Nubra Camp - Diskit Monastery - Agham Shyok Road - Indus Valley - Pangong Lake - Camp at Pangong,Tangse",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at Nubra Camp, Dinner and overnight stay at Hotel at Pangong, Tangse)",
      },
      {
        day: 7,
        heading: "Tangse, Pangong to Hanleh (180 km) Starting at 9.00 AM",
        description:
          "Hotel at Tanste, Pangong - Hanleh Homestay",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at Hotel at Pangong, Dinner and overnight stay at Hanleh Homestay)",
      },
      {
        day: 8,
        heading: "Hanle to Umling la to Tso Moriri (80km + 80km + 160km) Starting at 9.30 AM",
        description:
          "Homestay in Hanle - Umling la - Homestay in Tso Moriri",
        image:
          "https://media.assettype.com/outlooktraveller%2F2023-11%2Ff8ceeeb7-5ea8-434b-b9ef-be4bf7f02670%2Fshutterstock_755658937.jpg",
        others:
          "(Breakfast at Hotel in Hanle, Dinner and overnight stay at the homestay in Tso Moriri)",
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
        day: 10,
        heading: "Rest day, Leh market",
         others:
          "(Breakfast, dinner and overnight stay at the hotel in Leh)",
      },
      {
        day: 11,
        heading: "Airport Drop (5 Km 10 Mints)",
        description:
          "After breakfast, Airport drop",
      },
    ],
    transportation:
      "Meeting and Assistance on Arrival and Departure Transport Services as per the itinerary",
    accommodation:
      "Leh Ladakh 05 Nights, Nubra Valley 02 Night, Pangong 01 Night, Hanle 01 Night, Tso Moriri 01 Night",
    permits: "Inner Line permits/ Wild Life Fees",
    MedicalSupport:
      "Medical support if needed Necessary medical/ vitamin tablets",
    costExcludes:
      "Oxygen cylinder, Flight charge, Monastery Entrance at all places of visit, Garden / Monument / Monastery Entrance fees.,Car racing activity charge (Nubra Valley), Camel Safari at Hunder (Nubra Valley), Expenses of personal nature such as Tips, Laundry, Telephone, etc., Any other SS tours not mentioned in the program.",
    OtherDetails:
      "Hotel: 3/2-star hotels and 3 -star camps, Vehicle: Traveller/ Innova/ Xylo/ XUV/ Eco van, Guide: If needed, Expected temperature: Between - 10 degrees to 18 degrees, Necessary dress: Winter Jacket, Shoes, Thermal wear, Snacks will be provided as lunch for 3 days during the six-day journey on request if needed, due to the lack of availability of cooked food. People can have food from local shops at their, own risk, as it may cause digestion problems., Oxygen masks and necessary tablets will be provided by the tour coordinator.",
    TermsAndConditions:
      "Covid-19 protocols for tourists (May change at any time), Charges for the RT-PCR test should be carried on their own., Extra medical expenses should be carried on their own., People having health issues/ Above 50/ can come at their own risk., RT-PCR test report taken 72 hours prior to the travel date is mandatory., The passengers who don’t have RT-PCR negative test reports must be vaccinated against, COVID-19, in order to visit the tourist spots/public places and must be wearing double masks,",
    day: 11,
    night: 10,
    food: "11 Breakfast, 10 Dinner, 1 Lunch, 2 water bottles per day",
    createdAt: "2024-03-07T10:15:00Z",
    updatedAt: "2024-03-07T10:15:00Z",
  }
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
  food: string;
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

  const accommodations = selectdPackage?.accommodation.split(", ");
  const food = selectdPackage?.food.split(", ");
  const costExcludes = selectdPackage?.costExcludes.split(", ");
  const OtherDetails = selectdPackage?.OtherDetails.split(", ");

  return (
    <div className="PackagesComponent">
      {isOpenPopup && (
        <div className="main-popup-container">
                  <div className="popup-container">
                  <div className="button-container">
                  <AiOutlineClose color="#53004c" size={40} onClick={() => {
                    setIsOpenPopup(false);
                  }}/>
                    <div className="close-button fs-1" >
                    
                    </div>
              </div>
                        <div className="p-3 border border-2 rounded bg-light popup-content">
                <div className="text-center my-5">
                  <div className="my-3 fs-3 fw-bold">
                    {selectdPackage?.heading}
                  </div>
                  <div className="my-3 fs-5 fw-bold">
                    {selectdPackage?.night} Nights, {selectdPackage?.day}, Days
                  </div>
                </div>
                {selectdPackage &&
                  selectdPackage?.subPackage.map((data, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center justify-content-center m-5 row"
                    >
                      {data.image && (
                      <img
                        className="rounded view-package-image col-md-6"
                        src={data.image}
                        alt=""
                      />
                      )}
                      <div className="col-md-6">
                        <div className="my-3 fw-bold">
                          <div className="fs-3">Day {data.day}</div>
                          <div className="fs-5">{data.heading}</div>
                        </div>
                        <div className="my-3">{data.description}</div>
                        <div className="my-3">{data.others}</div>
                      </div>
                    </div>
                  ))}
                <div className="m-5">
                  <div className="fs-2 fw-bold text-center text-decoration-underline">
                    Cost Includes:
                  </div>
                  <div className="m-3">
                    <div className="my-3">
                      <div className="fs-4 fw-bold mb-1">Transportation</div>
                      <div className="m-3">
                        {selectdPackage?.transportation}
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="fs-4 fw-bold mb-1">
                        Accommodation (2/3 Sharing)
                      </div>
                      <div className="m-3">
                        {accommodations &&
                          accommodations.map((accommodation, index) => (
                            <div key={index}>{accommodation}</div>
                          ))}
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="fs-4 fw-bold mb-1">Food/Person</div>
                      <div className="m-3">
                        {food &&
                          food.map((food, index) => (
                            <div key={index}>{food}</div>
                          ))}
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="fs-4 fw-bold mb-1">
                        Permits and Entry fees
                      </div>
                      <div className="m-3">{selectdPackage?.permits}</div>
                    </div>
                    <div className="my-3">
                      <div className="fs-4 fw-bold mb-1">Medical support</div>
                      <div className="m-3">
                        {selectdPackage?.MedicalSupport}
                      </div>
                    </div>
                    <div className="my-3">
                      <div className="fs-4 fw-bold mb-1">Cost Excludes</div>
                      <div className="m-3">
                        {costExcludes &&
                          costExcludes.map((costExcludes, index) => (
                            <div key={index}>{costExcludes}</div>
                          ))}
                      </div>
                      <div className="my-3">
                        <div className="fs-4 fw-bold mb-1">Other details</div>
                        <div className="m-3">
                          {OtherDetails &&
                            OtherDetails.map((OtherDetails, index) => (
                              <div key={index}>{OtherDetails}</div>
                            ))}
                        </div>
                      </div>
                      <div className="text-center my-5">
                        <div className="fs-4 fw-bold mb-1">
                          Terms and conditions
                        </div>
                        <p>{selectdPackage?.TermsAndConditions}</p>
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
                    image={data.subPackage[0].image}
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

      {/* <div className="my-3">
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
                    image={data.subPackage[0].image}
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
      </div> */}
    </div>
  );
}

export default PackagesComponent;
