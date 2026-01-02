import React from 'react'

const Timer = () => {
  return (
    <div className='h-[max-content] flex justify-center items-center   w-[100%] '>
        <div className="cover flex flex-wrap ">
            <div className="cov1 h-[400px] w-[100%]  sm:w-[600px]">
                <img src="https://preview.colorlib.com/theme/ashion/img/discount.jpg"        className="h-[100%]  object-cover w-[100%]" alt="" />

            </div>
            <div className="cov2 h-[400px] flex  flex-col items-center  before:h-[150px]  relative  before:absolute before:left-[50%] before:top-[50px]  before:translate-x-[-50%] before:rounded-full  before:w-[150px] before:bg-white bg-[#F4F4F4]  w-[100%] sm:w-[600px]">
            <p className='text-[18px] relative top-[80px] z-[10] text-center font-semibold '>
                Discount
            </p>
            <h1 className='text-[45px]   top-[70px]  text-center relative z-[20px] text-[#CA1515] style '>
                Summer 2019
            </h1>
            
            <p className='text-[18px] text-center relative z-[20] top-[60px]   font-semibold'>Sale <span className='text-[#CA1515]'>50%</span></p>
                
                   <button className="text-[16.5px] relative top-[150px] pb-[5px] border-b-[2px] border-b-[#CA1515] font-semibold">
                SHOP NOW
              </button>
            </div>

        </div>
      
    </div>
  )
}

export default Timer
