"use client";
import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";
import { PRODUCTS_ROUTE } from "@/app/constants/Routes";

const DEFAULT_SORT = JSON.stringify({ createdAt: -1 });
const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 10000000000;
const DEFAULT_BRANDS_FILLTER = [];
const DEFAULT_CATEGORY_FILTER = "";

const Drawer = ({ showFilter = true, setShowFilter, brands, categories }) => {
  const [loading, setLoading] = useState(false);
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX_PRICE);
  const [minPrice, setMinPrice] = useState(DEFAULT_MIN_PRICE);
  const [brandsFilter, setBrandsFilter] = useState(DEFAULT_BRANDS_FILLTER);
  const [categoryFilter, setCategoryFilter] = useState(DEFAULT_CATEGORY_FILTER);

  const [sort, setSort] = useState(DEFAULT_SORT);
  const handleBrandsFilterChange = (brand) => {
    setBrandsFilter((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item != brand)
        : [...brandsFilter, brand]
    );
  };

  useEffect(() => {
    console.log(categories);
  }, []);
  const router = useRouter();
  const setfilters = () => {
    const params = new URLSearchParams();
    params.set("min", minPrice);
    params.set("max", maxPrice);
    params.set("sort", sort);
    params.set("brands", brandsFilter.join(","));
    params.set("category", categoryFilter);
    router.push(`?${params.toString()}`);
    setShowFilter(false);
  };

  const resetFilter = () => {
    setSort(DEFAULT_SORT);
    setMaxPrice(DEFAULT_MAX_PRICE);
    setMinPrice(DEFAULT_MIN_PRICE);
    setBrandsFilter(DEFAULT_BRANDS_FILLTER);
    setCategoryFilter(DEFAULT_CATEGORY_FILTER);
    setShowFilter(false);
    router.push(PRODUCTS_ROUTE);
  };

  return (
    <div className={showFilter ? "block" : "hidden"}>
      <div
        className={`h-full w-full bg-[#00000044] z-30 fixed top-0 left-0 right-0 bottom-0`}
        onClick={() => setShowFilter(false)}></div>
      <div
        className={`fixed top-18 left-0 z-30 w-72 h-screen pt-4 px-2 overflow-y-auto transition-transform  ${
          showFilter ? "translate-x-0" : "-translate-x-68"
        }  bg-white dark:bg-gray-800`}>
        <div className="flex items-center justify-between">
          <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            Filter Products
          </h5>
          <button
            onClick={() => setShowFilter(false)}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <IoCloseCircleOutline className="w-6 h-6" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {/* order by */}
        <div className=" px-2 overflow-y-auto text-center ">
          <div className="py-2 pb-3">
            <div>
              <label
                htmlFor="order-by"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Order By:
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                id="order-by"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value={JSON.stringify({ createdAt: -1 })}>
                  Latest
                </option>
                <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
                <option value={JSON.stringify({ price: 1 })}>
                  Price: low to high
                </option>
                <option value={JSON.stringify({ price: -1 })}>
                  Price: high to low
                </option>
                <option value={JSON.stringify({ name: 1 })}>A - Z</option>
                <option value={JSON.stringify({ name: -1 })}>Z - A</option>
              </select>
            </div>
          </div>
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            Filter Products:
          </label>
          <div className="px-2 text-center  text-white  gap-1 flex">
            <input
              type="number"
              id="min"
              name="min"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Min Price"
              min={0}
              onChange={(e) => {
                setMinPrice(e.target.value);
              }}
            />
            <p>to</p>

            <input
              type="number"
              id="max"
              name="max"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Max Price"
              min={0}
              onChange={(e) => {
                setMaxPrice(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="pb-1 px-2 overflow-y-auto text-center ">
          <div className="py-1 pb-1">
            <div>
              <label
                htmlFor="order-by"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <select
                onChange={(e) => setCategoryFilter(e.target.value)}
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value={""}>Select Category</option>
                {categories?.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="pb-3 text-center">
          <label
            htmlFor="brands"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">
            Brands
          </label>
          {brands?.map((brand, index) => (
            <div key={index} className="flex items-center">
              <input
                id={brand}
                onChange={() => handleBrandsFilterChange(brand)}
                type="checkbox"
                className="rounded-sm"
                checked={brandsFilter.includes(brand)}
              />
              <label
                htmlFor={brand}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {brand}
              </label>
            </div>
          ))}
        </div>
        <div className="flex gap-5 justify-center">
          <button
            type="submit"
            onClick={setfilters}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-white  bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 border dark:text-white dark:border-slate-300 hover:bg-primary-800 disabled:opacity-80 hover:opacity-80 hover:cursor-pointer"
            disabled={loading}>
            Apply Filters
            {loading && <Spinner className="ml-2 h-5 w-5" />}
          </button>
          <button
            type="submit"
            onClick={resetFilter}
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-white  bg-red-800 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-800 border dark:text-white dark:border-slate-300 hover:bg-red-900 disabled:opacity-80 hover:cursor-pointer"
            disabled={loading}>
            Reset
            {loading && <Spinner className="ml-2 h-5 w-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
