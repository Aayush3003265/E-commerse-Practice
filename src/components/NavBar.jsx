"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import NavLink from "./NavLink";
import routeLink from "@/app/constants/NavLink";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/userPreferences/userPreferenceSlice";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import AuthUser from "./AuthUser";
import { IoCartOutline } from "react-icons/io5";
import { CART_ROUTE } from "@/app/constants/Routes";

const NavBar = () => {
  // const isAuth = true;
  const { user } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.userPreference);
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect;
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 sticky  w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              E-BAZAR
            </span>
          </Link>
          <div className="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              className="px-2 py-2 dark:text-amber-50"
              onClick={() => dispatch(toggleTheme())}>
              {theme == "light" ? <MdLightMode /> : <MdOutlineLightMode />}
            </button>
            {/* theme toggle button  */}

            <div className="relative flex items-center justify-center px-2 py-2 mr-6  dark:text-amber-50">
              <Link href={CART_ROUTE} className="">
                <IoCartOutline />
              </Link>
              <div class="absolute inline-flex items-center justify-center w-4 h-4 font-semibold text-[0.6rem] text-white bg-red-600 rounded-full top-0 right-0">
                {products.length}
              </div>
            </div>
            {/* login logout button */}
            {user ? (
              <AuthUser user={user} />
            ) : (
              <Link href={"/login"}>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Login
                </button>
              </Link>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 xl:text-black md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {routeLink.map((link, index) => {
                return user || !link.isAuth ? (
                  <NavLink link={link} key={index} />
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
