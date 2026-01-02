import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { CgMenuBoxed } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import Searchfield from './Searchfield';
import { useDispatch, useSelector } from 'react-redux';
import { userget1, userdelete1 } from './Redux/Reducer';

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const Costumer = useSelector((state) => state.name.Usercheck);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userget1());
  }, []);

  return (
    <div className="relative">
      {/* ===== HEADER BAR ===== */}
      <div className='h-[70px] flex items-center justify-between px-[15px] sm:px-[50px] border-b-[2px] border-b-[#F2F2F2]'>

        <img src="logo.png (1).webp" className='w-[100px]' alt="logo" />

        {/* ===== DESKTOP NAV ===== */}
        <ul className='hidden md:flex md:gap-x-[70px] gap-x-[90px]'>
          <NavLink to="/"><li className='text-[22px]'>Home</li></NavLink>
          <NavLink to="/Shoping"><li className='text-[22px]'>Shop</li></NavLink>
          <NavLink to="/Blog"><li className='text-[22px]'>Blog</li></NavLink>
          <NavLink to="/Contact"><li className='text-[22px]'>Contact</li></NavLink>
        </ul>

        {/* ===== SEARCH (DESKTOP) ===== */}
        <div className='hidden lg:hidden xl:flex w-[30%]'>
          <Searchfield />
        </div>

        {/* ===== LOGOUT BUTTON ===== */}
        {Costumer && (
          <button
            onClick={() => dispatch(userdelete1("1"))}
            className='hidden lg:block text-[17px] bg-black text-white px-[30px] font-semibold rounded-[10px] py-[6px]'
          >
            Logout
          </button>
        )}

        {/* ===== ICONS (DESKTOP) ===== */}
        <div className="hidden md:flex gap-x-[30px]">
          <IoIosSearch  className='text-[25px] hidden lg:flex' />
          <CiHeart className='text-[25px]  hidden lg:flex' />
          <FaCartShopping className='text-[25px]' />
        </div>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <div className="md:hidden  flex">
          <CgMenuBoxed
            className='text-[35px] cursor-pointer'
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {openMenu && (
        <div className="md:hidden absolute top-[70px] left-0 w-full border-[1px] bg-black text-white  border-gray-200 z-50">
          <ul className="flex flex-col  w-[100%] items-center gap-y-[0px] py-[0px]">
            <NavLink to="/" className="hover:bg-gray-500 py-[10px] block text-center w-[100%]" onClick={() => setOpenMenu(false)}>
              <li className="text-[20px] block  cursor-pointer">Home</li>
            </NavLink>
            <NavLink to="/Shoping" className="hover:bg-gray-500 block  py-[10px] text-center w-[100%]" onClick={() => setOpenMenu(false)}>
              <li className="text-[20px]">Shop</li>
            </NavLink>
            <NavLink to="/Blog" className="hover:bg-gray-500 block py-[10px]  text-center w-[100%]" onClick={() => setOpenMenu(false)}>
              <li className="text-[20px]">Blog</li>
            </NavLink>
            <NavLink to="/Contact" className="hover:bg-gray-500 block py-[10px]  text-center w-[100%]" onClick={() => setOpenMenu(false)}>
              <li className="text-[20px]">Contact</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
