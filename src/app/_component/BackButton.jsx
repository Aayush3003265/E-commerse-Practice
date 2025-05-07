"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <>
      <button
        className="border-black shadow-md border-2 hover:cursor-pointer px-6 py-2 text-xl"
        onClick={() => router.back()}>
        Back
      </button>
    </>
  );
};

export default BackButton;
