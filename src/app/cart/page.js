"use client";
import CartTable from "@/components/cart/Table";
import { useSelector } from "react-redux";

const Cartpage = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <div className="dark:bg-slate-800 bg-gray-50 min-h-screen">
      <div className="max-w-screen-xl container mx-auto p-4 py-16">
        <h1 className="text-3xl dark:text-white pb-5 font-semibold">
          Your Cart
        </h1>
        <CartTable />
      </div>
    </div>
  );
};

export default Cartpage;
