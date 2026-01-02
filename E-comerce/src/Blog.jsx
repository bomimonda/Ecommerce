import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Data2 } from "./BlogData";
import Instagram from "./Instagram";
import Footer from "./Footer";
const Blog = () => {
  return (
    <>
    <div className="h-[auto]  pb-[100px] w-[100%] ">
      <div className="hom flex h-[50px]  mt-[30px] gap-x-[5px] mb-[100px] pl-[30px] sm:pl-[150px]  items-center">
        <div className="mani flex gap-x-[5px] items-center">
          <FaHome /> Home
        </div>
        <div className="main  gap-x-[5px] flex items-center">
          <IoIosArrowForward />
          Blog
        </div>
      </div>

      <div className="blog flex justify-center gap-x-[80px] flex-wrap gap-y-[150px] w-[80%] m-auto">
        <div className="row1 flex flex-col gap-y-[130px] h-[100%] w-[350px]">
          {Data2.first.map((val, ind) => {
            return (
              <div
                className={`one h-[${val.height}px] relative w-[100%] bg-green-700`}
              >
                <img
                  src={val.img}
                  className="h-[100%] w-[100%] object-cover"
                  alt=""
                />
                <div className="tag  h-[max-content] py-[20px] w-[90%] top-[90%] absolute bg-white">
                  <p className="text-[18px] font-semibold">{val.content}</p>
                  <div className="in  justify-start gap-x-[30px]  mt-[10px] flex">
                    <p className="text-[14px]">by Ema Timahe</p>
                    <p className="text-[14px]">Seb 17, 2019</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* row2 */}
        <div className="row1 flex flex-col gap-y-[150px] h-[100%] w-[350px]">
          {Data2.second.map((val, ind) => {
            return (
              <div
                className={`one h-[${val.height}px] relative w-[100%] bg-green-700`}
              >
                <img
                  src={val.img}
                  className="h-[100%] w-[100%] object-cover"
                  alt=""
                />
                <div className="tag  h-[max-content] py-[20px] w-[90%] top-[90%] absolute bg-white">
                  <p className="text-[18px] font-semibold">{val.content}</p>
                  <div className="in  justify-start gap-x-[30px]  mt-[10px] flex">
                    <p className="text-[14px]">by Ema Timahe</p>
                    <p className="text-[14px]">Seb 17, 2019</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* row3 */}
        <div className="row1 flex flex-col   gap-y-[150px]  h-[auto] pb-[150px] w-[100%] sm:w-[350px]">
          {Data2.third.map((val, ind) => {
            return (
              <div
                className={`one h-[max-content] relative mb-[40px] w-[100%] bg-green-700`}
              >
                <img
                  src={val.img}
                  className="h-[max-content] w-[100%] object-cover"
                  alt=""
                />
                <div className="tag  h-[max-content]  py-[20px] w-[90%] top-[90%] absolute bg-white">
                  <p className="text-[18px] font-semibold">{val.content}</p>
                  <div className="in  justify-start gap-x-[30px]  mt-[10px] flex">
                    <p className="text-[14px]">by Ema Timahe</p>
                    <p className="text-[14px]">Seb 17, 2019</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        
      </div>
       <button className="text-[18px] text-white block mx-auto  px-[30px] py-[10px] rounded-[20px] bg-[#CA1515]">Load More</button>
    </div>
   
    <Instagram/>
  
    </>
  );
};

export default Blog;
