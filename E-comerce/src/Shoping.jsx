import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Instagram from "./Instagram";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { All } from "./Redux/Reducer";
import { useEffect } from "react";
import { Cartdata1 } from "./Redux/Reducer";
import { cartincrement } from "./Redux/Reducer";
import { cartdecrement } from "./Redux/Reducer";
import { removedata } from "./Redux/Reducer";
import { productfalse } from "./Redux/Reducer";
import { updatecart } from "./Redux/Reducer";
import { useNavigate } from "react-router-dom";
import { total } from "./Redux/Reducer";
import { totalget1 } from "./Redux/Reducer";
import { total11,increment1,decrement1 } from "./Redux/Reducer";
import Totalamount from "./Totalamount";
import { RxCross2 } from "react-icons/rx";


const Shoping = () => {
  let navigate = useNavigate();
  let [total, settotal] = useState("");
  let state1 = useSelector((state) => state.name.loading);
  console.log(state1);
   let Total44=useSelector((state)=>state.name.Totalamount)
  let state = useSelector((state) => state.name);
  console.log("hello");
  console.log(state.Cartdata);

  let dispatch = useDispatch();
 let total33=useSelector((state)=>state.name.Cartdata)


  let Totalprice = state.Cartdata.reduce((acu, val) => {
    return acu + val.producttotal;
  }, 0);
 

  useEffect(() => {
      
    dispatch(All());

   

    dispatch(Cartdata1(state.Cartdata));


    return () => {};
  }, [dispatch,Total44]);

  return (
    <>
      <div className="h-[max-content] pb-[100px] w-[100%] bg-[#FFFFFF]">
       
          <div className="hom flex h-[50px]  mt-[30px] gap-x-[5px] mb-[100px] pl-[30px] sm:pl-[150px]  items-center">
                  <div className="mani flex gap-x-[5px] items-center">
                    <FaHome /> Home
                  </div>
                  <div className="main  gap-x-[5px] flex items-center">
                   <IoIosArrowForward />
            Shoping cart
                  </div>
                </div>

    




      
        <div className="item h-[670px] m-auto  sm:w-[100%] md:w-[80%] ">
          <div className="name pl-[30px] sm:pl-[0px]  flex border-b-[1px]  border-b-[#F2F2F2] mb-[50px]  h-[80px] sm:px-[25px] md:px-[90px]  items-center justify-between ">
            <h1 className="md:text-[20px]   text-[20px]  sm:text-[25px] font-semibold text-gray-800">
              Product
            </h1>

            <div className="left  hidden sm:flex gap-x-[6rem]">
              <h1 className="md:text-[20px] text-[20px]  sm:text-[20px]   font-semibold text-gray-800">
                Price
              </h1>
              <h1 className="md:text-[20px] text-[20px]  sm:text-[20px]     font-semibold text-gray-800">
                Quantity
              </h1>
              <h1 className="md:text-[20px]  text-[20px] hidden sm:flex  sm:text-[20px] font-semibold text-gray-800">
                Total
              </h1>
            </div>
          </div>

          {/* product item */}
          <div className="con h-[600px]   overflow-y-scroll">
            {state.Cartdata[0] !== undefined
              ? state.Cartdata?.map((val, id) => {
                  return (
                    <div className="item1  bg-gray-100  border-b-[1px] flex-wrap  border-b-gray-500 tin:border-b-[#F2F2F2] h-[max-content]   md:py-[20px]  py-[40px] sm:py-[0px]  gap-y-[40px]  items-center flex justify-between  sm:px-[0px] md:px-[80px]">
                      <div className="small1  m-auto  sm:m-auto md:m-auto  w-[400px] h-[max-content] flex flex-col   sm:flex-row md:flex-row items-center gap-x-[20px]">
                        <img
                          src={val.images[0]}
                          className="h-[100px] w-[100px]"
                          alt=""
                          srcset=""
                        />
                        <div className="content flex mt-[10px]  flex-col gap-y-[5px]">
                          <p className="text-[16px] text-center px-[10px] ">{val.title}</p>
                          <p className="text-[16px] my-[10px] text-center">Stock {val.stock}</p>
                          <ul className="flex   justify-center  sm:justify-start md:justify-start ">
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
                          {/* <p className="text-[18px] font-semibold">$ 59.0</p> */}
                        </div>
                      </div>
                      <div className="left flex  flex-col gap-y-[20px] tin1:gap-y-[0px] tin1:flex-row  gap-x-[30px]  m-auto  md:m-auto sm:m-auto    sm:gap-x-[50px]  md:gap-x-[70px] flex-wrap items-center">
                        <p className="md:text-[24px] text-[22px]  sm:text-[24px] font-semibold text-[#AC1515]">
                          <span className=" inline-block  mr-[20px] tin1:hidden">Price</span>  ${val.price}
                        </p>
                        <div className="quantity items-center gap-x-[20px] flex">
                          <button
                            onClick={() => {
                                //  dispatch(increment1(val.id))
                              dispatch(updatecart({ act: "incre", data: val }));
                              dispatch(cartincrement(val.id));
                            }}
                            disabled={state1 == "true" ? true : false}
                            className="  h-[30px] w-[30px]      sm:h-[20px] sm:w-[20px]      md:h-[40px] md:w-[40px] flex justify-center  text-[20px] sm:text-[25px] md:text-[30px]   rounded-[5px] items-center  text-white bg-[#AC1515]"
                          >
                            +
                          </button>
                          <p className="text-[20px]   sm:text-[25px]">
                             {val.count}
                          </p>
                          <button
                            onClick={() => {
                              // dispatch(decrement1(val.id))
                              dispatch(updatecart({ act: "decre", data: val }));
                              dispatch(cartdecrement(val.id));
                            }}
                            disabled={state1 == "true" ? true : false}
                            className=" h-[30px] w-[30px]      sm:h-[20px] sm:w-[20px]      md:h-[40px] md:w-[40px]                      flex justify-center  rounded-[5px] items-center  sm:text-[25px] md:text-[30px] text-white bg-[#AC1515]"
                          >
                            -
                          </button>
                        </div>
                        <p className="md:text-[24px]  text-[23px] sm:text-[24px] font-semibold text-[#AC1515]"> <span className=" inline-block mr-[10px]  tin1:hidden">Total</span> {`$${val.producttotal}`}</p>
                        <button
                          onClick={() => {
                            dispatch(total11())
                            dispatch(removedata(val.id));
                          }}
                          className="close  tin:flex"
                        >
                          <RxCross2 className="  text-[30px] sm:text-[25px]  md:text-[30px]" />
                        </button>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <Totalamount total1={Totalprice}/>
           {/* {"cart total"} */}
      </div>
      <Instagram />
    </>
  );
};

export default Shoping;
