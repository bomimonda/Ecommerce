import React from "react";
import { FaInstagram } from "react-icons/fa";
const Instagram = () => {
    let array=[
        1,2,3,4,5,6
    ]
  return (
    <div>
      <div className="cov  h-[max-content]   py-[30px] items-center justify-center  sm:justify-center md:justify-center  mt-[50px] flex-wrap   flex">
        {array.map((val,ind)=>{
            return (
                <div className="cov1  transition-all    ease-in duration-700 group relative h-[300px] sm:h-[250px] w-[100%] sm:w-[270px]">
          <div className="mp  group-hover:flex group-hover:transition-all group-hover:ease-in group-hover:duration-700 h-[100%] hidden flex-col justify-center items-center w-[100%] bg-[#ffffff69] absolute">
            <FaInstagram className="text-[30px]" />

            <p className="text-[20px] font-semibold">@ ashion_Shope</p>
          </div>
          <img
            src={`https://preview.colorlib.com/theme/ashion/img/instagram/insta-${val}.jpg`}
            className="h-[100%] w-[100%]"
            alt=""
            srcset=""
          />
        </div>
            )
        })}

      </div>
    </div>
  );
};

export default Instagram;
