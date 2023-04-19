import React, { useContext, useEffect } from "react";
import logo from "../assets/google-logo.png";
import SearchResultInput from "./SearchResultInput";
import { TbGridDots } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { menu } from "../utils/Constants";
import { useState } from "react";
import { Context } from "../utils/ContextApi";
import { useNavigate } from "react-router";
const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImageSearch} = useContext(Context);
  const navigate = useNavigate();
  function clickHandler(menu) {
    let isTypeImages = menu.name === "Images";

    setSelectedMenu(menu.name);
    setImageSearch(isTypeImages ? true : false);
  
  }
  useEffect(() => {
    return () => setImageSearch(false);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <img
            onClick={() => navigate("/")}
            className="hidden md:block w-[92px] mr-10"
            alt=""
            src={logo}
          />
          <SearchResultInput />
        </div>
        <div className="flex gap-2 items-center ml-3 justify-center">
          <div className="flex items-center md:h-10 md:w-10 h-4 w-4 justify-center rounded-full hover:bg-black/[0.05]">
            <TbGridDots size="22" color="#5f6368" />
          </div>
          <div className=" flex justify-center items-center h-[32px] w-[32px] rounded-full">
            <FaUserCircle className="md:h-8 md:w-8 h-4 w-4 text-blue-800" />
          </div>
        </div>
      </div>
      <div className="flex ml-[-12px] mt-3">
        {menu.map((menu, index) => {
          return (
            <span
              key={index}
              onClick={() => clickHandler(menu)}
              className={`flex relative items-center p-3 text-[#5f6368] cursor-pointer 
              ${selectedMenu === menu.name ? "text-[#1a73e8]" : ""}
              `}
            >
              <span className="hidden md:block mr-2">{menu.icon}</span>
              <span className="text-sm">{menu.name}</span>
              {selectedMenu === menu.name && (
                <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]"></span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultHeader;
