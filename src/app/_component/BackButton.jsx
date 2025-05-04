"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="border-white border-2 hover:cursor-pointer p-4"
      onClick={() => router.back()}>
      Back
    </button>
  );
};

export default BackButton;
