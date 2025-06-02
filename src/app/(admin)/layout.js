"use client";
import Sidebar from "@/components/admin/Sidebar";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { allowedAdminRoles } from "@/helper/auth";
import { LOGIN_ROUTE } from "../constants/Routes";

const AdminLayout = ({ children }) => {
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) router.push(LOGIN_ROUTE);
    const isAllowed = allowedAdminRoles(user?.roles);
    if (!isAllowed) router.push(LOGIN_ROUTE);
  }, [router, user]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] bg-white dark:bg-gray-900">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
