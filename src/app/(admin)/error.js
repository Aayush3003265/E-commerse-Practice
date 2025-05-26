"use client";
const AdminPanelError = ({ error }) => {
  return <div className="text-center py-10  text-red-500">{error.message}</div>;
};

export default AdminPanelError;
