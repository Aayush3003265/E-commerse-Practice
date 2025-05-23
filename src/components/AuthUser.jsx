"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import AuthUserPopUp from "./products/AuthUserPopUp";

const AuthUser = ({ user }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="flex gap-2 justify-center items-center relative">
      <button
        className="border-2 rounded-full p-2 dark:text-white"
        onClick={() => setShowPopup(!showPopup)}>
        <FaUser />
      </button>
      {showPopup && <AuthUserPopUp user={user} setShowPopup={setShowPopup} />}
    </div>
  );
};

export default AuthUser;
