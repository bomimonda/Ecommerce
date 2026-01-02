import React from "react";
import Instagram from "./Instagram";
import Footer from "./Footer";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdHeadset } from "react-icons/md";
const Contact = () => {
  return (


    <>
    <div className="h-[max-content] pb-[100px] w-[100%]  pt-[40px]">
      <div className="hom flex h-[50px] gap-x-[5px] mb-[100px] pl-[30px] sm:pl-[150px]  items-center">
        <div className="mani flex gap-x-[5px] items-center">
          <FaHome /> Home
        </div>
        <div className="main  gap-x-[5px] flex items-center">
          <IoIosArrowForward />
          Contact
        </div>
      </div>
      <div className="contact  justify-center gap-y-[50px]  sm:gap-y-[70px]  w-[100%]  flex-col sm:flex-col   lg:flex-row  gap-x-[90px] flex">
        <div className="row1">
          <div className="contactinfo  pl-[30px] sm:pl-[80px]  w-[100%] flex flex-col gap-y-[20px]">
            <h1 className="text-[25px]  font-semibold">Contact info</h1>
            <div className="address flex flex-col gap-y-[10px]">
              <div className="flex gap-x-[15px] items-center">
                <IoLocation className="text-[#CA1515]  text-[20px]" />
                <p className="text-[17px]   sm:text-[19px] font-semibold">Address</p>
              </div>
              <p className="   text-[15px]  px-[10px] sm:px-[0px]  leading-[30px] sm:text-[17px] text-gray-500">
                160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161{" "}
              </p>
            </div>
            <div className="address   flex flex-col gap-y-[10px] ">
              <div className="flex gap-x-[15px] items-center">
                <FaPhoneAlt className="text-[#CA1515]  text-[17px] sm:text-[20px]" />

                <p className=" text-[17px] sm:text-[19px] font-semibold">Phone</p>
              </div>
              <p className="text-[15px]   sm:text-[17px] text-gray-500">
                125-711-811125-668-886
              </p>
            </div>
            <div className="address   flex flex-col gap-y-[10px] ">
              <div className="flex gap-x-[15px] items-center">
                <MdHeadset className="text-[#CA1515] text-[17px] sm:text-[20px]" />
                <p className=" text-[17px] sm:text-[19px] font-semibold">Support</p>
              </div>
              <p className="text-[15px]   sm:text-[17px] text-gray-500">
                Support.photography@gmail.com
              </p>
            </div>
            <div className="Message">
              <h1 className="text-[22px]   sm:text-[25px] uppercase pb-[40px]  font-semibold">
                Send Message
              </h1>

              <form className="flex flex-col  gap-y-[30px]  w-[100%] sm:w-[500px]" action="">
                <input
                  type="text"
                  className="border-[1px]   rounded-[5px] text-[16px] sm:text-[19px] py-[8px] pl-[20px] w-[80%] sm:pr-[250px] focus:outline-none border-gray-400"
                  placeholder="Name"
                  name="Name"
                  id=""
                />
                <input
                  type="text"
                  className="border-[1px]   rounded-[5px] text-[16px] sm:text-[19px] py-[8px] pl-[20px]  w-[80%] sm:pr-[250px] focus:outline-none border-gray-400"
                  placeholder="Email"
                  name="Email"
                  id=""
                />
                <input
                  type="text"
                  className="border-[1px]   rounded-[5px] text-[16px] sm:text-[19px] py-[8px] pl-[20px] w-[80%] sm:pr-[250px] focus:outline-none border-gray-400"
                  placeholder="Website"
                  name="Website"
                  id=""
                />
                <textarea
                  name=""
                  placeholder="Message"
                  className="border-[1px]  pt-[10px] pl-[20px] rounded-[5px] text-[16px] sm:text-[19px] h-[150px]  w-[80%] sm:w-[500px] focus:outline-none border-gray-400"
                  id=""
                ></textarea>

                <button className="sm:text-[17px] text-[14px] rounded-[25px] px-[40px] py-[10px] font-semibold w-[max-content] text-white bg-[#CA1515]">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* row2 */}

        <div className="row2 h-[115vh] md:w-[100%]   lg:w-[40%] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13608.351329471736!2d74.4166434!3d31.4942695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f3d3388a3ff%3A0xb156c9c9f1ab1813!2sSavour%20Foods!5e0!3m2!1sen!2s!4v1749967015324!5m2!1sen!2s"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>

    </div>

    
      <Instagram/>
     
</>
  );
};

export default Contact;
