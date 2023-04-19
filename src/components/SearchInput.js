import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import mic from "../assets/google-voice.png";
import googleImageSearch from "../assets/google-image.png";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  const googleSearchHandler = () => {
    if (searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div className="flex flex-col items-center ">
  
      <div
        className="h-[46px] w-full md:w-[582px] flex md:gap-3 gap-1 
    border items-center border-[#dfe1e5] px-1 md:px-4 rounded-3xl focus-within:shadow-c focus-within:border-0 hover:border-0 hover:shadow-c"
      >
        <AiOutlineSearch size={18} className="px-1 md:px-0" color="#9aa0a6" />
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          value={searchQuery}
          autoFocus
          className="grow outline-0 text-black/[0.87]"
        />
        <div className="flex items-center md:gap-3 gap-0 px-2 md:px-0">
          {searchQuery && (
            <div className="flex gap-1 md:gap-3">
              <RxCross2
                onClick={() => setSearchQuery("")}
                color="#70757a"
                className="md:h-6 md:w-6 h-4 w-4 cursor-pointer"
              />
              <div className="border-r-[1px] border-[#c0c1c3db]"></div>
            </div>
          )}
          <img
            className="md:h-6 md:w-6 h-5 w-5 cursor-pointer"
            src={mic}
            alt=""
          />
          <img
            className="md:h-6 md:w-6 h-5 w-5  cursor-pointer"
            src={googleImageSearch}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-6 text-[#3c4043]">
        <button
          onClick={() => googleSearchHandler()}
          className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2"
        >
          Google Search
        </button>
        <Link to="https://www.google.com/doodles">
          <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
            I'm Feeling Lucky
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchInput;
