import Sidebar from "@/components/admin/Sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
