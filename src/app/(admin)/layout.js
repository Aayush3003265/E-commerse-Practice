"use client";
import Sidebar from "@/components/admin/Sidebar";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminLayout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(user);
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
