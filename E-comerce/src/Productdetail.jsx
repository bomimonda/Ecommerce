import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Instagram from "./Instagram";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Data } from "./Data";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment } from "./Redux/Reducer";
import { decrement } from "./Redux/Reducer";
import { Addproduct } from "./Redux/Reducer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { All } from "./Redux/Reducer";
import { Cartdata1 } from "./Redux/Reducer";
import { increment1 } from "./Redux/Reducer";
import { decrement1 } from "./Redux/Reducer";
import { throttle } from 'lodash';
import { total22 } from "./Redux/Reducer";
import { RxCross2 } from "react-icons/rx";

const Productdetail = () => {
  let [url,seturl]=useState("")
  let sd=useSelector((state)=>state)
  let id=useParams()
  let navigate=useNavigate()
  let dispatch=useDispatch()
  let {data2}=useSelector((state)=> state.name)
  
  
  

  function move() {
   
    
   setTimeout(() => {
     navigate("/Shoping")
   }, 400);
    
  }

  
 
  let a=data2.filter((val,ind)=>{
    return val.id==id.id

    
  })



  let state = useSelector((state) => state.name);
  
    
    
      useEffect(() => {
       
       
        dispatch(All())
       
        dispatch(Cartdata1())
      
       
      
        return () => {
        
        }
      }, [])
  
    
  

  let w=state.Cartdata.filter((val,ind)=>{
  if (val.id==id.id) {
     return true
  }
  })
 
  
  
  
  return (
   <>
   {
    a[0]!==undefined?(
       <div className="h-[max-content pb-[50px]    w-[100%] ">
      <div className="hom flex h-[50px] mt-[30px] gap-x-[5px] mb-[100px] pl-[50px] sm:pl-[150px]  items-center">
        <div className="mani flex gap-x-[5px] items-center">
          <FaHome /> Home
        </div>
        <div className="main  gap-x-[5px] flex items-center">
          <IoIosArrowForward />
          Shoping cart
        </div>
      </div>

      <div className="detail h-[max-content] pb-[50px]  items-center flex flex-col lg:flex-row  justify-center   gap-x-[50px] w-[100%]">
       <div className=" hidden lg:flex flex-col gap-y-[10px] oli">
           {a[0].images.map((val,ind)=>{
            return(
              <img src={val}  onClick={(e)=>{
                seturl(e.target.src)

              }} className="h-[200px] rounded w-[200px]" alt="" srcset="" />
            )
           })}
        </div>
        <div className="one h-[800px]   flex items-center w-[90%] tin1:w-[70%] lg:w-[350px]">
          <img
            src={url==""?a[0].images[0]:url}
            className="h-[80%] object-cover w-[100%]"
            alt=""
            srcset=""
          />
        </div>

        <div className="data h-[80%]  w-[100%] tin1:w-[80%] lg:w-[50%]  flex flex-col   px-[20px] tin:px-[50px] py-[15px] gap-y-[10px] ">
          <h1 className=" text-[23px]  sm:text-[30px]   md:text-[35px] font-semibold uppercase">
            {a[0].title==undefined?"":a[0].title}
          </h1>
          <p className="text-[16px]  sm:text-[17px]">Brand: SKMEIMore Men Watches from SKMEI</p>
          <ul className="flex justify-start  items-center">
            <li>
              <FaStar className="text-[#E3C01C] text-[14px]" />
            </li>
            <li>
              <FaStar className="text-[#E3C01C] text-[14px]" />
            </li>
            <li>
              <FaStar className="text-[#E3C01C] text-[14px]" />
            </li>
            <li>
              <FaStar className="text-[#E3C01C] text-[14px]" />
            </li>
            <li>
              <FaStar className="text-[#E3C01C] text-[14px]" />
            </li>
            <p className="ml-[20px]">rewiew 1.79</p>
          </ul>
          <h1 className=" text-[23px] sm:text-[40px] font-semibold text-[#AC1511]">$ {a[0].price==undefined?"":a[0].price}</h1>
          <p className="text-[15px] w-[80%] lg:w-[60%] leading-[30px]">
          {a[0].description==undefined?"":a[0].description}
          
          </p>

          <div className="quantity flex   ">
            <div className="one sm:gap-x-[50px]   flex-col sm:flex-row flex-wrap  mb-[40px] mt-[20px] items-center  flex">
               <div className="inm flex items-center gap-x-[30px]">
                 <p className="tex-[17px] font-semibold">Quantity:</p>
                 <div className="capsul border-[1px] border-gray-200 bg-white px-[10px] rounded-[20px] w-[130px] py-[10px]  justify-between gap-x-[20px] flex">
                    <button 
                    className={`${sd.name.loding=="true"?"bg-red-500":""}`}
                     disabled={sd.name.loading=="true"?true:false}
                    onClick={()=>{
                      dispatch(increment1(a[0].id))
                    }}> {sd.name.loading=="true"?"loading":"+"}</button>
                    <p>{ w.length==1?w[0].count:a[0].count}</p>
                    <button
                    className={`${sd.name.loding=="true"?"bg-red-500":""}`}
                    disabled={sd.name.loding=="true"?true:false}
                    onClick={()=>{
                      dispatch(decrement1(a[0].id))
                    }}
                    >
                      {sd.name.loading=="true"?"loading":"-"}
                      </button>
                 </div>
               </div>
                 <button  onClick={()=>{

                move(),
                  dispatch(Addproduct(a[0]),sd),
                  dispatch(total22(a[0]))
                 
                 
                 }}
                 
                 disabled={w.length==1?true:false}
                 className={` text-[15px]      ml-[85px]   mt-[30px]   sm:mt-[0px] sm:ml-[0px]   sm:text-[17px] px-[30px] py-[10px] rounded-[25px] ${w.length==1?"bg-black":"bg-[#AC1515]"} text-white`}>ADD TO CART</button>
                 <div className="heart h-[35px] hidden sm:flex justify-center items-center rounded-full border-[1px] border-gray-300  w-[35px] ">
                    <CiHeart className="text-[25px]" />
                 </div>
                 <div className="adjus heart h-[35px]  hidden sm:flex justify-center items-center rounded-full border-[1px] border-gray-300  w-[35px]   ">
                    <HiOutlineAdjustmentsHorizontal />
                 </div>
            </div>

          </div>
          <p className="h-[1px] w-[70%] bg-gray-300"></p>
          <div className="deat flex flex-col  mt-[20px]  gap-y-[10px]">
           
            <div className="flex items-center  gap-x-[10px]">
              <p className=" text-[15px]  sm:text-[17px] font-semibold">Available color:</p>
              <div className="cir flex gap-x-[5px]">
                <p className="h-[20px] w-[20px] bg-[#E31E2F] rounded-full"></p>
                <p className="h-[20px] w-[20px] bg-[#111111] rounded-full"></p>
                <p className="h-[20px] w-[20px] bg-[#E4AA8B] rounded-full"></p>
              </div>
            </div>
            <div className="flex gap-x-[15px]">
              <p className="  text-[15px]  sm:text-[17px] font-semibold">Available size:</p>
              <div className="flex gap-x-[12px]">
                <p className="text-gray-400">XS</p>
                <p className="text-[#CC241C]">S</p>
                <p className="text-gray-400">M</p>
                <p className="text-gray-400">L</p>
              </div>
            </div>
            <div className="flex gap-x-[20px]">
              <p className="text-[15px]   sm:text-[17px] font-semibold">Stock:</p>
              <p className="text-[15px]   sm:text-[16px] text-gray-400">{w.length==1?w[0].stock:a[0].stock}</p>
            </div>
          </div>
        </div>
         
      </div>
        <Instagram/>
    </div>

  
    ):""
   }
  
   </>
  );
};

export default Productdetail;
