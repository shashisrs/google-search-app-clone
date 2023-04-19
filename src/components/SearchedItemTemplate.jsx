import React from "react";

const SearchedItemTemplate = (props) => {
  let { data } = props;
  function Set(data) {
    return { __html: data };
  }
  return (
    <div className="flex flex-col py-3 max-w-[700px]">
      <div
        className="group cursor-pointer"
        onClick={() => window.open(data.link)}
      >
        <div className="text-sm truncate text-[#202124]">
          {data.formattedUrl}
        </div>
        <div className="text-xl text-[#1a0dab] group-hover:underline  pt-2">
          {data.title}
        </div>
      </div>
      <div
        className="text-sm text-[#4d5156] leading-5 pt-1"
        dangerouslySetInnerHTML={Set(data.htmlSnippet)}
      />
    </div>
  );
};

export default SearchedItemTemplate;
