import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { Data } from "./Data";
import { NavLink } from "react-router-dom";
import { add, filterproduct } from './Redux/Reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { activeclassadd } from "./Redux/Reducer";
import Pagination from "../Pagination";

import axios from "axios";
const Product = () => {
  let dispatch=useDispatch()


  let {search}=useSelector((state)=> state.name)
  console.log(search);
  let{productdata}=useSelector((state)=>state.name)
  console.log(productdata);
  




  return (
    <div className="h-[max-content]   w-[100%] ">
      <div className="nav2   flex    justify-between    w-[100%]   sm:w-[80%]  m-auto  flex-col sm:flex-col lg:flex-row gap-x-[50px]   sm:items-start   gap-y-[70px] sm:gap-y-[90px]    sm:m-auto  items-center pt-[50px] ">
        <h1 className=" text-[25px]   sm:text-[30px]  font-semibold relative after:absolute after:left-[3px] after:top-[45px]  after:h-[2px] after:w-[100px] after:bg-[#CA1515]">
          New Product
        </h1>
        <ul className={`list-none  flex sm:flex justify-center content-start  gap-y-[20px] tin1:gap-y-[0px]  flex-wrap  gap-x-[1rem] sm:gap-x-[3rem]`}>
            {productdata.map((val,ind)=>{
              return (
                <li
          onClick={()=>{
            
              dispatch(activeclassadd({payload:val.name}))
            dispatch(filterproduct(val.name))
        
          }}
          
          className={`text-[13px]   cursor-pointer sm:text-[15px]  ${val.check==true?"decoration-[#CA1515]    decoration-[2px] underline  underline-offset-[10px]":"underline decoration-transparent     decoration-[2px]  underline-offset-[10px]"} font-sans  `}>
          {val.name}
          </li>
              )
            })}
        </ul>
      </div>
      {/* Card */}

      <div className="card11 h-[max-contenent]  w-[100%]  px-[10px] tin:px-[0px]   mt-[80px] flex  flex-wrap justify-center gap-y-[50px]    sm:gap-x-[60px] ">
          {search.map((val,ind)=>{
            return(<>
             <div className="card1 h-[max-content] tin1:h-[470px] pb-[30px] group   w-[280px]  bg-gray-200">
          <div className="div w-[100%] relative  h-[80%]">
            <div className="container hidden  lg:flex   justify-center items-end  flex-row-reverse  group-hover:bg-[#0000005d]   gap-x-[30px] hover:pb-[100px]  transition-all duration-700 linear    h-[100%]  w-[100%] overflow-hidden absolute ">
              <FiShoppingCart onClick={()=>{
                dispatch(add(val))
              }} className="bg-white group-hover:top-[80%] transition-all duration-700 linear    group-hover:transition-all group-hover:linear  group-hover:duration-500  absolute top-[100%] left-[20%]  hover:rotate-[360deg] hover:bg-[#CA1515] hover:text-white text-[19px] h-[40px] px-[10px] w-[40px] rounded-full" />
              <FaRegHeart className="bg-white text-[19px] transition-all duration-700 linear    group-hover:transition-all group-hover:linear  group-hover:duration-500     group-hover:top-[80%]  absolute top-[100%]   hover:rotate-[360deg] hover:bg-[#CA1515] hover:text-white      h-[40px] px-[10px] w-[40px] rounded-full" />
          <NavLink to={`/productdetail/${val.id}`}>
              < AiOutlineArrowsAlt className='bg-white text-[21px] transition-all duration-700 linear   left-[65%]   group-hover:transition-all group-hover:linear  group-hover:duration-500     group-hover:top-[80%]  absolute top-[100%]   hover:rotate-[360deg] hover:bg-[#CA1515] hover:text-white      h-[40px] px-[10px] w-[40px] rounded-full' />
          </NavLink>



            </div>

            <img
              src={val.images[0]}
              className="w-[100%] object-cover object-left-top h-[100%]"
              alt=""
              srcset=""
            />
          </div>
          <div className=" flex mt-[20px] justify-around px-[25px] lg:hidden">
 <FiShoppingCart onClick={()=>{
                dispatch(add(val))
              }} className="bg-white text-[#CA1515] group-hover:top-[80%] transition-all duration-700 linear    group-hover:transition-all group-hover:linear  group-hover:duration-500    hover:rotate-[360deg] hover:bg-[#CA1515] hover:text-white text-[19px] h-[40px] px-[10px] w-[40px] rounded-full" />
              <FaRegHeart className="bg-white text-[#CA1515]   text-[19px] transition-all duration-700 linear    group-hover:transition-all group-hover:linear  group-hover:duration-500     group-hover:top-[80%]    hover:bg-[#CA1515] hover:text-white      h-[40px] px-[10px] w-[40px] rounded-full" />
          <NavLink to={`/productdetail/${val.id}`}>
              < AiOutlineArrowsAlt className='bg-white  text-[#CA1515] text-[21px] transition-all duration-700 linear   left-[65%]   group-hover:transition-all group-hover:linear  group-hover:duration-500     group-hover:top-[80%]     hover:rotate-[360deg] hover:bg-[#CA1515] hover:text-white      h-[40px] px-[10px] w-[40px] rounded-full' />
          </NavLink>

          </div>
          <p className="text-[15px] text-center pt-[15px]">{val.title}</p>
          <ul className="flex justify-center mt-[10px]">
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
 
          <p className="text-[18px] text-center mt-[10px] font-semibold">
            $ {val.price}
          </p>
                   
        </div>
            
            </>


            )
          })}
      </div>
     
    </div>
  );
};

export default Product;
