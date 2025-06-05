"use client";
import React from "react";
import { GrSearch } from "react-icons/gr";

const Search = () => {
  const [productName, setProductName] = useState([]);
  return (
    <div className="max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center pe-1 pointer-events-none"></div>
        <input
          type="search"
          id="search"
          className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
        <button className="text-white absolute end-2  bottom-[6px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 hover:cursor-pointer ">
          <GrSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
