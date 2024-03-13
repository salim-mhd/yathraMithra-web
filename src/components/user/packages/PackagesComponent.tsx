import React, { useEffect, useState } from 'react'
import "./PackagesComponent.scss"
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import Package from '../package/Package';
import axios from 'axios';
import { base_url } from '../../../constants/staticData';
import { packageInterface } from '../../../interface/Interface';

function PackagesComponent() {
    // this state for store Package Details
    const [packagesData, setPackagesData] = useState<packageInterface[]>([]);

  // this fcunction using for fetch package Details
  const fetPackgeDetails = async () => {
    let res = await axios.get(`${base_url}/package`);
    console.log("res", res.data.packagesDetails);
    let responseData = res.data.packagesDetails;
    setPackagesData(responseData);
  };

  useEffect(()=>{
    fetPackgeDetails();
  },[])

  return (
    <div className='PackagesComponent'>
        <div className='heading-container my-2'>
        <div>
        <div className='heading'>New Packages</div>
        <div >Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
        <div className='d-flex align-itmes-center my-2'>
        <div className='icon-left me-3'><IoIosArrowRoundBack/></div>
        <div className='icon-right'><IoIosArrowRoundForward/></div>
        </div>
        </div>
        <div className='container'>
        <div className='packages'>
          {packagesData.map((data:any)=>{
            return(
              <Package heading={data.heading} image={data.image} description={data.description} price={data.price} orginalPrice={''} roomRating={0} day={0} night={0} foodTime={0} city={''} state={''} createdAt={''} updatedAt={''} /> 
            )
          })}
        </div>
        </div>
    </div>
  )
}

export default PackagesComponent;