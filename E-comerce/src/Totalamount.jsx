import React, { useState,useEffect,useRef } from 'react'
import { IoLogoAndroid } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { total11 } from './Redux/Reducer';
import { useNavigate } from 'react-router-dom';
import { totalget1 } from './Redux/Reducer';
import { current } from '@reduxjs/toolkit';
const Totalamount = () => {
    let[ass,setass]=useState("")
    let dispatch=useDispatch()
    let navigate=useNavigate()

    let total33=useSelector((state)=>state.name.Cartdata)
    let Total44=useSelector((state)=>state.name.Totalamount)
    console.log(total33);
   
    
    let f=localStorage.getItem("idd")
    let rpp=useRef()
    
  

  
   useEffect(() => {
   
  
      
    let data=total33.reduce((acu,val)=>{
        return acu+val.producttotal
        
    },0)
    console.log("data");
    
    console.log(data);
    setass(data)
   
     return () => {
      
     }
   }, [total33])
   

   
   
    
  return (
    <div>
      
        <div className="cart w-[80%] mt-[140px] m-auto flex justify-end">
          <div
            className="cart h-[max-content]  py-[30px] tin:pb-[20px] rounded-[5px] flex  px-[20px]  tin:pl-[30px] gap-y-[30px]  flex-col w-[370px]
      bg-gray-300
      "
          >
            <h1 className="text-[25px] font-semibold text-[#AC1515]">
              CART TOTAL
            </h1>

            <div className="TOTAL flex gap-x-[25px]  items-center tin:gap-x-[60px] ">
              <p className="text-[23px] font-semibold">Subtotal</p>
              <p    className="text-[20px]  whitespace-nowrap font-semibold text-[#AC1515]">
              $  {ass}
              </p>
            </div>
            <div className="TOTAL flex  gap-x-[60px] items-center tin:gap-x-[95px] ">
              <p className="text-[23px] font-semibold">Total</p>
              <p   className="text-[20px] whitespace-nowrap font-semibold text-[#AC1515]">
           $  {ass}
              </p>
            </div>
            <button
              onClick={() => {
                navigate("/Payment");
              }}
              className=" text-[18px] px-[15px] sm:text-[20px] sm:px-[40px] py-[10px] rounded-[20px] text-white w-[max-content] bg-[#AC1515]"
            >
              Proceed Check Out{" "}
            </button>
          </div>
        </div>
    </div>
  )
}

export default Totalamount
