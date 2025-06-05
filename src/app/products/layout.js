import { getBrands, getProductCategories } from "@/api/products";
import FilterButton from "@/components/products/FilterButton";
import React from "react";

const ProductsLayout = async ({ children }) => {
  return (
    <div className="dark:bg-slate-800 bg-gray-50">
      <div className="max-w-screen-xl container mx-auto p-4 ">
        <h1 className="text-4xl font-bold text-center mt-10 dark:text-white">
          Products Page
        </h1>

        {children}
      </div>
    </div>
  );
};

export default ProductsLayout;
