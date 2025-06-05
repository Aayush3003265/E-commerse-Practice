"use client";
import React, { useState } from "react";
import { RiColorFilterFill } from "react-icons/ri";
import Drawer from "./Drawer";

const FilterButton = ({ brands, categories }) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div>
      <button
        className=" bg-amber-300 px-3 py-2 font-semibold hover:cursor-pointer rounded-md dark:bg-amber-400 dark:text-white"
        onClick={() => setShowFilter(true)}>
        <div className="flex items-center gap-1 justify-center">
          <RiColorFilterFill />
          Filter
        </div>
      </button>
      <Drawer
        categories={categories}
        brands={brands}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
      />
    </div>
  );
};

export default FilterButton;
