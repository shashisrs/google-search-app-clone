import React, { useEffect, useState } from 'react';
import mic from "../assets/google-voice.png";
import googleImageSearch from "../assets/google-image.png";
import {AiOutlineSearch} from 'react-icons/ai';
import {RxCross2} from "react-icons/rx";
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';
const SearchResultInput = () => {
    const[isTyping,setIsTyping] = useState(false);
    const{query}=useParams();
    const[title,setTitle]=useState("");
  const[searchQuery,setSearchQuery]=useState(query || "");
  useEffect(()=>{
    setTitle(searchQuery);
    // eslint-disable-next-line
  },[query])
  
  const navigate=useNavigate();
  const searchQueryHandler=(event)=>{
    if(event.key==="Enter" && searchQuery.length>0){
      navigate(`/${searchQuery}/${1}`);
    }
  }
  const searchHandler=()=>{
    if(searchQuery.length>0){
      navigate(`/${searchQuery}/${1}`)
    }
  }
  return (
    <div className='h-[46px] w-full md:w-[582px] flex md:gap-3 gap-1 
    border items-center border-[#dfe1e5] px-1 md:px-4 rounded-3xl focus-within:shadow-c focus-within:border-0 hover:border-0 hover:shadow-c'>
    <Helmet>
      <title>{title.length>0 &&(`${title}-Google Search`)}</title>
    </Helmet>
     {isTyping &&(<AiOutlineSearch size={18} className='px-1 md:px-0' color="#9aa0a6"/>)}
        <input 
          type="text"
          onChange={(e)=>setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          onClick={()=>setIsTyping(true)}
          value={searchQuery}
          autoFocus
          className='grow outline-0  text-black/[0.87]'
        />
        <div className='flex items-center md:gap-3 gap-0 px-2 md:px-0'>
        {searchQuery &&<div className='flex gap-1 md:gap-3'>
          <RxCross2 onClick={()=>setSearchQuery("")} color="#70757a" className='md:h-6 md:w-6 h-4 w-4 cursor-pointer'/>
          <div className='border-r-[1px] border-[#c0c1c3db]'></div>
        </div>}
          <img className="md:h-6 md:w-6 h-5 w-5 cursor-pointer" src={mic} alt=""/>
          <img className="md:h-6 md:w-6 h-5 w-5 hidden sm:block cursor-pointer" src={googleImageSearch} alt=""/>
          <AiOutlineSearch onClick={()=>searchHandler()} className='px-1 md:px-0 hidden sm:block md:h-6 md:w-6 h-5 w-5  cursor-pointer' color="#4285f4"/>
        </div>
    </div>
  )
}

export default SearchResultInput