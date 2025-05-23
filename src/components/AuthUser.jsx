"use client";
import { logoutUser } from "@/redux/auth/authSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { IoIosLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const AuthUser = ({ user }) => {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 justify-center items-center relative">
      <button
        className="border-2 rounded-full p-2 dark:text-white"
        onClick={() => setShowPopup(true)}>
        <FaUser />
      </button>
      {showPopup ? (
        <div className="absolute top-9 right-0 w-auto px-2 py-1 rounded-md border shadow-md">
          user Popup
        </div>
      ) : (
        ""
      )}
      {/* <h4 className="text-blue-700 md:dark:text-white font-semibold">
        Hi! {user.name}
      </h4>
      <button
        className="text-blue-700 flex items-center font-bold gap-2 dark:text-white"
        onClick={() => dispatch(logoutUser())}>
        Logout
        <IoIosLogOut />
      </button> */}
    </div>
  );
};

export default AuthUser;
