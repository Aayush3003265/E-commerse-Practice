import { logoutUser } from "@/redux/auth/authSlice";
import Link from "next/link";
import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";

const AuthUserPopUp = ({ user, setShowPopup }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="absolute top-9 right-0 w-auto px-6 py-3 rounded-lg whitespace-nowrap shadow-md z-30 dark:bg-gray-600 bg-gray-100"
      onClick={() => setShowPopup(false)}>
      <h4 className="font-medium text-2xl py-1 dark:text-white">
        Hi! {user.name}
      </h4>
      <Link
        href="/dashboard"
        className="py-2 px-1 rounded-md font-medium block bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-200 my-2
          ">
        Dashboard
      </Link>
      <Link
        href="/profile"
        className="py-2 px-1 rounded-md font-medium block bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-200 my-2
          ">
        Profile
      </Link>

      <button
        className="text-white flex items-center py-2 font-bold gap-2 w-full px-1 rounded-md  hover:bg-blue-400 hover:cursor-pointer bg-blue-500 my-1"
        onClick={() => dispatch(logoutUser())}>
        Logout
        <IoIosLogOut />
      </button>
    </div>
  );
};

export default AuthUserPopUp;




