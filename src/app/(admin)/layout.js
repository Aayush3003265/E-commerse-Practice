"use client";
import Sidebar from "@/components/admin/Sidebar";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { allowedAdminRoles } from "@/helper/auth";

const AdminLayout = ({ children }) => {
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) router.push("/");
    const isAllowed = allowedAdminRoles(user?.roles);
    if (!isAllowed) router.push("/");
  }, [router, user]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr]">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
