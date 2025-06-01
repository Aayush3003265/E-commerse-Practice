"use client";
import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const MainLayout = ({ children }) => {
  const { theme } = useSelector((state) => state.userPreference);
  return (
    <div className={theme}>
      {children}
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
