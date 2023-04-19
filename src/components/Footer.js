import React from "react";
import { quickLinks, settingMenu } from "../utils/Constants";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#f2f2f2] w-screen">
      <div className="py-[15px] px-[15px] border-b border-[#dadce0]">
        <span className="text-[#70767a] text-[15px] leading-none">India</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between py-3 md:px-[15px]">
        <div className="flex justify-center">{
          quickLinks.map((item,index)=>{
            return(
              <Link key={index} to={item.to} className="text-[#70757a] text-[14px] md:text-[14px] leading-none p-[10px] hover:underline">
                {item.link}
              </Link>
            )
          })
        }</div>
        <div className="flex justify-center">{
          settingMenu.map((item,index)=>{
            return(
              <Link key={index} to={item.to} className="text-[#70757a] text-[14px] md:text-[14px] leading-none p-[10px] hover:underline">
                {item.menu}
              </Link>
            )
          })
        }</div>
      </div>
    </div>
  );
};

export default Footer;
