import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../utils/ContextApi";
import { useParams } from "react-router-dom";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import { fetchDataFromApi } from "../utils/api";
import SearchedImageItemTemplate from "./SearchedImageItemTemplate";
import SearchedItemTemplate from "./SearchedItemTemplate";
import Pagination from './Pagination';

const SearchResult = () => {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const { imageSearch } = useContext(Context);
  const fetchSearchResults = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }
    fetchDataFromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };
  useEffect(() => {
    fetchSearchResults();
    // eslint-disable-next-line
  }, [query, startIndex, imageSearch]);
  
  if (!result) return;
  const { items, queries, searchInformation } = result;
  return (
    <div className="flex flex-col min-h-[100vh]">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        <p className="text-sm text-[#70757a] mb-3">
          {`About ${searchInformation.formattedTotalResults} results (${searchInformation.formattedSearchTime} seconds)`}
        </p>
        {!imageSearch ? (
          <div>
            {items.map((item, index) => (
              <SearchedItemTemplate key={index} data={item} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {items.map((item, index) => (
              <SearchedImageItemTemplate key={index} data={item} />
            ))}
          </div>
        )}
        <Pagination queries={queries}/>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResult;
