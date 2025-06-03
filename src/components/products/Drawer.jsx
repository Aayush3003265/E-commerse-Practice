"use client";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";

const Drawer = ({ showFilter = true, setShowFilter }) => {
  const [loading, setLoading] = useState(false);
  const [maxPrice, setMaxPrice] = useState(10000000000);
  const [minPrice, setMinPrice] = useState(0);
  const [sort, setSort] = useState(JSON.stringify({ createdAt: -1 }));
  const router = useRouter();
  const setfilters = () => {
    setLoading(true);
    const params = new URLSearchParams();
    params.set("min", minPrice);
    params.set("max", maxPrice);
    params.set("sort", sort);
    router.push(`?${params.toString()}`);

    setLoading(false);
  };
  return (
    <div className={showFilter ? "block" : "hidden"}>
      <div
        className={`h-svh w-full bg-[#00000044] z-30 fixed top-0 left-0 right-0 bottom-0`}
        onClick={() => setShowFilter(false)}></div>
      <div
        className={`fixed top-18 left-0 z-30 w-64 h-screen py-4 px-2 overflow-y-auto transition-transform ${
          showFilter ? "translate-x-0" : "-translate-x-64"
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
        <div className="py-4 px-2 overflow-y-auto text-center ">
          <div className="py-2 pb-8">
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Order By:
              </label>
              <select
                onChange={(e) => setSort(e.target.value)}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value={JSON.stringify({ createdAt: -1 })}>
                  Latest
                </option>
                <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
                <option value={JSON.stringify({ price: -1 })}>
                  Price: low to hogh
                </option>
                <option value={JSON.stringify({ createdAt: 1 })}>
                  Price: high to low
                </option>
              </select>
            </div>
          </div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Filter Products:
          </label>
          <div className="px-2 text-center text-white flex items-center justify-center gap-1">
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
        <button
          type="submit"
          onClick={setfilters}
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-white  bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 border dark:text-white dark:border-slate-300 hover:bg-primary-800 disabled:opacity-80 hover:opacity-80"
          disabled={loading}>
          Apply Filters
          {loading && <Spinner className="ml-2 h-5 w-5" />}
        </button>
      </div>
    </div>
  );
};

export default Drawer;
