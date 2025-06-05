"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <>
      <button
        className=" w-[100px] text-xl bg-slate-300 px-3 py-2 font-semibold hover:cursor-pointer rounded-md dark:bg-slate-600 dark:text-white"
        onClick={() => router.back()}>
        <div className="flex justify-center items-center gap-2">
          <FaArrowLeft />
          Back
        </div>
      </button>
    </>
  );
};

export default BackButton;
