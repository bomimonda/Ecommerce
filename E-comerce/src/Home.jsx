import React from "react";
import Product from "./Product";
import Pagination from "../Pagination";
import Slider from "./Slider";
import Sales from "./Sales";
import Timer from "./Timer";
import Services from "./Services";
import Instagram from "./Instagram";
import Footer from "./Footer";
import { Getdata } from "../Api";
import { useEffect } from "react";
import { All } from "./Redux/Reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Cartdata1 } from "./Redux/Reducer";
import axios from "axios";
import Searchfield from "./Searchfield";
import { productfalse } from "./Redux/Reducer";

const Home = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state.name);

  async function search() {
    let res = await axios.get(
      `https://api-production-b9a1.up.railway.app/pro?like=5`
    );
    console.log(res);
  }

  useEffect(() => {
    console.log("hello3333");

    search();

    dispatch(All());
    dispatch(Cartdata1());

    return () => {};
  }, []);

  return (
    <div>
      <div className="main h-[max-content] flex    sm:gap-y-[100px]  flex-col sm:flex-col  lg:flex-row w-[100%]">
        <div className="one  h-[370px] sm:h-[auto] bg-[#FAE3D7] border-white tin:border-t-[10px] sm:pb-[0px]  pb-[70px]  sm:w-[100%] lg:w-[55%] relative ">
          <div className="content flex flex-col  pl-[50px]  tin:py-[60px]  h-[100%] gap-y-[30px] absolute justify-center items-start w-[100%] ">
            <h1 className=" style text-[35px] tin:text-[40px] sm:text-[60px]">
              Women’s fashion
            </h1>
            <p
              lang="hi"
              className=" text-[13px] tin:text-[15px] sm:text-[17px] top-[390px] tin:leading-[25px] sm:leading-[35px] w-[80%] text-gray-400"
            >
              Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
              incidid-unt labore edolore magna aliquapendisse ultrices gravida.
            </p>
            <button className=" text-[13px]  mb-[40px] sm:text-[17px] pb-[5px] border-b-[2px] border-b-[#CA1515] font-semibold ">
              SHOP NOW
            </button>
          </div>
          <img
            src="https://preview.colorlib.com/theme/ashion/img/categories/category-1.jpg.webp"
            className="h-auto  object-cover "
            alt=""
            srcset=""
          />
        </div>
        <div className="two h-[100%]     flex-col gap-y-[0px]   sm:w-[100%] lg:w-[25%] bg-amber-400">
          <div className="box h-[370px]  tin:border-[10px] border-white relative w-[100%]">
            <div className="cov absolute  h-[100%] w-[100%] flex flex-col pl-[20px]  gap-y-[14px] justify-center items-start">
              <h1 className="text-[27px]   sm:text-[2rem] font-semibold">
                Men’s fashion
              </h1>
              <p className=" text-[16px] sm:text-[18px] text-gray-400">
                358 items
              </p>
              <button className="text-[14px]  sm:text-[16.5px] pb-[5px] border-b-[2px] border-b-[#CA1515] font-semibold">
                SHOP NOW
              </button>
            </div>
            <img
              src="https://preview.colorlib.com/theme/ashion/img/categories/category-2.jpg"
              className="h-[100%] object-center object-cover w-[100%]"
              alt=""
              srcset=""
            />
          </div>
          {/* SECond */}
          <div className="box h-[370px] tin:border-[10px] border-white  relative w-[100%]">
            <div className="cov absolute  h-[100%] w-[100%] flex flex-col pl-[20px]  gap-y-[14px] justify-center items-start">
              <h1 className=" text-[27px]   sm:text-[2rem] font-semibold">
                Cosmetics
              </h1>
              <p className=" text-[16px]   sm:text-[18px] text-gray-400">
                159 items
              </p>
              <button className="text-[14px]  sm:text-[16.5px] pb-[5px] border-b-[2px] border-b-[#CA1515] font-semibold">
                SHOP NOW
              </button>
            </div>
            <img
              src="https://preview.colorlib.com/theme/ashion/img/categories/category-4.jpg"
              className="h-[100%] object-center object-cover w-[100%]"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="two h-[100%]  flex-col w-[100%]  sm:w-[100%] lg:w-[25%]   bg-red-400">
          <div className="box h-[370px]  tin:border-[10px] border-white relative w-[100%]">
            <div className="cov absolute  h-[100%] w-[100%] flex flex-col pl-[20px]  gap-y-[14px] justify-center items-start">
              <h1 className=" text-[27px]   sm:text-[2rem] font-semibold">
                Kid’s fashion
              </h1>
              <p className=" text-[16px]  sm:text-[18px] text-gray-400">
                273 items
              </p>
              <button className="text-[14px]  sm:text-[16.5px] pb-[5px] border-b-[2px] border-b-[#CA1515] font-semibold">
                SHOP NOW
              </button>
            </div>
            <img
              src="https://preview.colorlib.com/theme/ashion/img/categories/category-3.jpg"
              className="h-[100%] object-center object-cover w-[100%]"
              alt=""
              srcset=""
            />
          </div>
          {/* SECond */}
          <div className="box h-[370px] tin:border-[10px] border-white relative w-[100%]">
            <div className="cov absolute  h-[100%] w-[100%] flex flex-col pl-[20px]  gap-y-[14px] justify-center items-start">
              <h1 className=" text-[27px]  sm:text-[2rem] font-semibold">
                Accessories
              </h1>
              <p className=" text-[16px]   sm:text-[18px] text-gray-400">
                974 items
              </p>
              <button className="text-[14px]  sm:text-[16.5px] pb-[5px] border-b-[2px] border-b-[#CA1515] font-semibold">
                SHOP NOW
              </button>
            </div>
            <img
              src="https://preview.colorlib.com/theme/ashion/img/categories/category-5.jpg"
              className="h-[100%] object-center object-cover w-[100%]"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <Product />

      <Slider />
      <Sales />
      <Timer />
      <Services />
      <Instagram />
    </div>
  );
};

export default Home;
