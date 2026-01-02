import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiSteeringWheel } from "react-icons/gi";
const Services = () => {
  return (
   <div className="cov h-[max-content]  py-[50px] w-[100%] ">
    <div className="services flex justify-center items-center  gap-y-[30px]  sm:gap-y-[0px] sm:gap-x-[40px] flex-wrap mt-[100px] m-auto  h-[max-content] py-[50px]   sm:w-[100%]">
      <div className="service1 items-center  gap-y-[10px]  sm:gap-y-[0px]  gap-x-[50px]  w-[100%] sm:w-[250px]   flex-col  sm:flex-row h-[100px] ">
        <FaCarAlt className="text-[#Ac1515] m-auto sm:m-0 text-[35px]" />
        <div className="content">
          <p className=" text-[17px]  text-center sm:text-[20px] font-semibold">Free Shipping</p>
          <p className="text-center">For all oder over $99</p>
        </div>
      </div>
       <div className="service1 items-center  gap-x-[20px] flex-col  gap-y-[10px]  sm:gap-y-[0px]  sm:flex-row w-[100%] sm:w-[300px] flex h-[100px] ">
        <GiSteeringWheel className="text-[#Ac1515] text-[35px]" />
        <div className="content">
          <p className="text-[17px]    sm:text-[20px] font-semibold">Money Back Guarantee</p>
          <p className="text-center">If good have Problems</p>
        </div>
      </div>
       <div className="service1 items-center gap-x-[20px]  gap-y-[10px] sm:gap-y-[0px]  w-[100%]    flex-col sm:flex-row  sm:w-[250px] flex h-[100px] ">
        <FaMoneyCheckDollar className="text-[#Ac1515] text-[35px]" />
        <div className="content">
          <p className="text-[17px]  sm:text-[20px] font-semibold">Online Support 24/7</p>
          <p className="text-center">Dedicated support</p>
        </div>
      </div>
       <div className="service1 items-center gap-x-[20px] flex-col   gap-y-[10px] sm:gap-y-[0px]   sm:flex-row w-[100%]  sm:w-[250px] flex h-[100px] ">
        < SlEarphones className="text-[#Ac1515] text-[35px]" />
        <div className="content">
          <p className="text-[17px] text-center sm:text-[20px] font-semibold">Payment Secure</p>
          <p>100% secure payment</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Services;
