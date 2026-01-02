import React from "react";

const Slider = () => {
  return (
    <div className="h-[70vh] relative mt-[70px] flex justify-center w-[100%]">
      <div className="card absolute  overflow-hidden  h-[500px] m-auto  w-[100%]  sm:w-[600px]">
        <div className="cov h-[100%] w-[200%]  flex  mob  ">
          <div className="vol h-[100%] w-[100%] flex flex-col items-center gap-y-[20px] justify-center ">
            <p className="text-[25px] text-[The Chloe Collection]">
              The Chloe Collection
            </p>
            <h1 className="  text-[40px] sm:text-[80px] style">The Chloe Collection</h1>
            <button className="text-[16.5px] pb-[5px] border-b-[2px] border-b-[#CA1515] font-semibold">
              SHOP NOW
            </button>
          </div>
          <div className="vol h-[100%] w-[100%] flex flex-col items-center gap-y-[20px] justify-center  ">
            <p className="text-[25px] text-[The Chloe Collection]">
              The Chloe Collection
            </p>
            <h1 className="text-[40px] sm:text-[80px] style">The Chloe Collection</h1>
            <button className="text-[16.5px] pb-[5px] border-b-[2px] border-b-[#CA1515] font-semibold">
              SHOP NOW
            </button>
          </div>
         
          
        </div>
      </div>
      <img
        src="https://preview.colorlib.com/theme/ashion/img/banner/banner-1.jpg"
        className="h-[100%] object-cover w-[100%]"
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Slider;
