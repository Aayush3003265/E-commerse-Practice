"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const AdminBackButton = () => {
  const router = useRouter();
  return (
    <div className="pb-4 dark:text-white">
      <button
        className=" shadow-md  hover:cursor-pointer px-4 py-1 text-md"
        onClick={() => router.back()}>
        <div className="flex items-center gap-2">
          <FaChevronLeft /> Back
        </div>
      </button>
    </div>
  );
};

export default AdminBackButton;
