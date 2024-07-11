import React from "react";
import { useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { IoMdPhotos } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import {AiFillHome} from 'react-icons/ai'
import {IoIosHeart} from 'react-icons/io'
import {FaList} from 'react-icons/fa'

const DashboardSidebar = () => {
  const { pathname } = useLocation();
  const author = useSelector((state) => state.auth.author);
  return (
    <nav className="flex text-lg font-semibold bg-white shadow-lg flex-col gap-2 w-fit min-h-screen border p-3 list-none justify-between items-center">
      <div>
        <div className="bg-black my-5 w-fit rounded-full py-4 px-6 text-white">
          {author.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col gap-2">
          {pathname === "/seller/profile" ? (
            <li className="w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-200 hover:scale-105 flex gap-2 justify-start items-center">
              <IoMdPhotos /> Photo Management
            </li>
          ) : (
            <li className="w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-200 hover:scale-105 flex gap-2 justify-start items-center">
              <IoMdPhotos />
              Photos Purchase
            </li>
          )}
          
          <li className="w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-200 hover:scale-105 flex gap-2 justify-start items-center">
            <SiGoogleanalytics /> Analytics
          </li>

          <li className="w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-200 hover:scale-105 flex gap-2 justify-start items-center">
            <FaList /> Orders
          </li>
          
          <li className="w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-200 hover:scale-105 flex gap-2 justify-start items-center">
            <IoIosHeart /> Favourites
          </li>
          
          <li className="w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-200 hover:scale-105 flex gap-2 justify-start items-center">
            <AiFillHome /> Home
          </li>
         
        </div>
      </div>
      {/* logout button */}
      <li className="w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-200 hover:scale-105 flex gap-2 justify-start items-center">
        <IoLogOut /> Logout
      </li>
    </nav>
  );
};

export default DashboardSidebar;
