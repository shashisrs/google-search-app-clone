import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pagination } from "../utils/Constants";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import logo from "../assets/pagination.png";
const Pagination = ({ queries }) => {
  const { query } = useParams();
  const [page, setPage] = useState(pagination[0].startIndex);
  const navigate = useNavigate();
  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);
  const paginationClickHandler = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
  };
  return (
    <div className="flex flex-col items-center max-w-[700px]">
      <div className="relative text-[#4285f4]">
        {queries.previousPage && (
          <div
            className="absolute  md:left-[-25px] top-[55px]"
            onClick={() =>
              paginationClickHandler(queries.previousPage[0].startIndex)
            }
          >
            <FiChevronLeft size={20} className="cursor-pointer" />
            <div
              className="cursor-pointer absolute left-[-5px]
        top-[30px] hidden md:block"
            >
              Prev
            </div>
          </div>
        )}
        <img className="w-[300px] md:w-[350px]" src={logo} alt="logo" />
        {queries.nextPage && (
          <div
            className="absolute right-[30px] md:right-[40px] top-[55px]"
            onClick={() =>
              paginationClickHandler(queries.nextPage[0].startIndex)
            }
          >
            <FiChevronRight size={20} className="cursor-pointer" />
            <div
              className="cursor-pointer absolute right-[-5px]
        top-[30px] hidden md:block"
            >
              Next
            </div>
          </div>
        )}
        <div className="flex absolute bottom-[70px] left-[40px] md:bottom-[85px] md:left-[50px] gap-3 text-[#4285f4]  text-[10px] md:text-sm">
        {pagination.map((p, index) => {
          return (
            <div
              key={index}
              onClick={() => paginationClickHandler(p.startIndex)}
              className={`cursor-pointer ${
                page === p.startIndex ? "text-black" : ""
              }`}
            >
              {p.page}
            </div>
          );
        })}
      </div>
      </div>
      
    </div>
  );
};

export default Pagination;
