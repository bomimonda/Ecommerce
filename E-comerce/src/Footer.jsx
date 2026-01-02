import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoPinterest } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="h-[max-content] flex-wrap  gap-y-[50px]   sm:flex-row sm:gap-y-[40px]  py-[50px] flex   justify-center w-[100%]">
      <div className="logo1 gap-y-[50px] flex flex-col w-[100%]  items-center tin:items-start  tin:w-[300px]">
        <img
        className="h-[30px] w-[130px]"
          src="https://preview.colorlib.com/theme/ashion/img/logo.png"
          alt=""
          srcset=""
        />

        <p className="w-[100%] px-[10px] text-center tin:px-[0px] leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt cilisis.
        </p>
        <div className="brand flex">
          <img
            src="https://preview.colorlib.com/theme/ashion/img/payment/payment-1.png"
            className="rounded-full h-[40px]"
            alt=""
            srcset=""
          />
          <img
            src="https://preview.colorlib.com/theme/ashion/img/payment/payment-2.png"
            className="rounded-full h-[40px]"
            alt=""
            srcset=""
          />
          <img
            src="https://preview.colorlib.com/theme/ashion/img/payment/payment-3.png"
            className="rounded-full h-[40px]"
            alt=""
            srcset=""
          />
          <img
            src="https://preview.colorlib.com/theme/ashion/img/payment/payment-4.png"
            className="rounded-full h-[40px]"
            alt=""
            srcset=""
          />
          <img
            src="https://preview.colorlib.com/theme/ashion/img/payment/payment-5.png"
            className="rounded-full h-[40px]"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="row1 w-[100%] items-center   tin:w-[300px]  flex flex-col 
      ">
        <h1 className="text-[25px]  md:text-center font-semibold">Quick links</h1>

        <p className="text-[16px] text-gray-700 mt-[15px] md:text-center">About</p>
        <p className="text-[16px] text-gray-700 mt-[15px] md:text-center">Blogs</p>
        <p className="text-[16px] text-gray-700 mt-[15px] md:text-center">Contact</p>
        <p className="text-[16px] text-gray-700 mt-[15px] md:text-center">FAQ</p>
      </div>
      <div className="row2 w-[100%] items-center tin:w-[300px]  flex   flex-col  ">
        <h1 className="text-[25px]  md:text-center font-semibold">Account</h1>
        <p className="text-[16px] text-gray-700 mt-[15px] md:text-center">My Account</p>
        <p className="text-[16px] text-gray-700 mt-[15px] md:text-center">Orders Tracking</p>
        <p className="text-[16px] text-gray-700 mt-[15px] md:text-center">Checkout</p>
        <p className="text-[16px] text-gray-700 mt-[15px] md:text-center">Wishlist</p>
      </div>

      <div className="row4 w-[100%]  items-center  tin:w-[300px]   flex flex-col  gap-y-[35px] ">
        <h1 className="text-[25px]  text-left font-semibold">
            NEWSLETTER
        </h1>
        <input type="text" className="focus:outline-none border-[2px] py-[5px] pl-[20px] w-[90%] rounded-[20px] border-gray-700" placeholder="Email" name="" id="" />
        <div className="icon flex gap-x-[5px]">
             
              <FaTwitter className="bg-gray-300 text-[16px] rounded-full  px-[5px] h-[30px] w-[30px]" />
               <FaYoutube className="bg-gray-300 text-[16px] rounded-full  px-[5px] h-[30px] w-[30px]" />
                <AiFillInstagram className="bg-gray-300 text-[13px] rounded-full  px-[5px] h-[30px] w-[30px]" />
                 <IoLogoPinterest className="bg-gray-300 text-[13px] rounded-full  px-[5px] h-[30px] w-[30px]" />
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
