import React from "react";
import { FaStar } from "react-icons/fa";
import { sales } from "./Data";
const Sales = () => {
  return (
    <div className="h-[max-content] w-[100%] mt-[80px] pb-[50px] flex justify-center gap-y-[100px] gap-x-[70px] flex-wrap ">
      {/* <h1 className="text-[30px] font-semibold relative after:absolute after:left-[3px] after:top-[45px]  after:h-[2px] after:w-[70px] after:bg-[#CA1515]">
         Hot Trend
        </h1> */}
      <div className="row1 w-[100%]  tin:w-[300px]   h-[max-content]  tin:h-[100%] flex  flex-col gap-y-[40px]    justify-start ">
        <h1 className=" text-[22px]  mb-[50px] tin:mb-[0px] mx-auto  tin:text-left  sm:text-[30px] font-semibold mt-[30px] relative after:absolute after:left-[0%]  tin:after:left-[3px] after:top-[45px]  after:h-[2px] after:w-[70px] after:bg-[#CA1515]">
          Hot Trend
        </h1>

        {sales.first.map((val, ind) => {
          return (
            <div className="small1  w-[100%]  h-[max-content] tin:h-[100px] tin:flex-row  flex-col flex items-center gap-x-[20px]">
              <img
                src={val.img}
                className="h-[100px] w-[100px]"
                alt=""
                srcset=""
              />
              <div className="content flex items-center  mt-[10px] tin:mt-[0px] flex-col gap-y-[8px]">
                <p className="text-[15px]">{val.content}</p>
                <ul className="flex justify-start ">
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                </ul>
                <p className="text-[18px] font-semibold">$ 59.0</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row1 w-[100%]  tin:w-[300px] h-[100%] flex   flex-col gap-y-[40px]  justify-start  ">
        <h1 className="text-[22px] mb-[50px] tin:mb-[0px]  mx-auto  tin:text-left sm:text-[30px] font-semibold relative after:absolute  mt-[30px] after:left-[3px] after:top-[45px]  after:h-[2px] after:w-[70px] after:bg-[#CA1515]">
          Best seller
        </h1>

        {sales.second.map((val, ind) => {
          return (
            <div className="small1  w-[100%]  h-[max-content] tin:h-[100px] tin:flex-row  flex-col flex items-center gap-x-[20px]">
              <img
                src={val.img}
                className="h-[100px] w-[100px]"
                alt=""
                srcset=""
              />
              <div className="content flex items-center  mt-[10px] tin:mt-[0px] flex-col gap-y-[8px]">
                <p className="text-[15px]">{val.content}</p>
                <ul className="flex justify-start ">
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                </ul>
                <p className="text-[18px] font-semibold">$ 59.0</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row1  w-[100%]  tin:w-[300px] h-[100%] flex  flex-col gap-y-[40px]    justify-start ">
        <h1 className="text-[22px]  mb-[50px] tin:mb-[0px]  mx-auto  tin:text-left sm:text-[30px] font-semibold relative after:absolute mt-[30px] after:left-[3px] after:top-[45px]  after:h-[2px] after:w-[70px] after:bg-[#CA1515]">
          Feature
        </h1>

        {sales.third.map((val, ind) => {
          return (
            <div className="small1  w-[100%]  h-[max-content] tin:h-[100px] tin:flex-row  flex-col flex items-center gap-x-[20px]">
              <img
                src={val.img}
                className="h-[100px] w-[100px]"
                alt=""
                srcset=""
              />
              <div className="content flex items-center  mt-[10px] tin:mt-[0px] flex-col gap-y-[8px]">
                <p className="text-[15px]">{val.content}</p>
                <ul className="flex justify-start ">
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                  <li>
                    <FaStar className="text-[#E3C01C]" />
                  </li>
                </ul>
                <p className="text-[18px] font-semibold">$ 59.0</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sales;
