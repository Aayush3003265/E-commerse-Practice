import { getBrands } from "@/api/products";
import ProductsFilter from "@/components/products/ProductsFilter";
import React from "react";

const ProductsLayout = async ({ children }) => {
  const brandsResponse = await getBrands();
  const brands = brandsResponse?.data;
  return (
    <div className="max-w-screen-xl container mx-auto p-4 ">
      <h1 className="text-4xl font-bold text-center">Products Page</h1>
      <ProductsFilter brands={brands} />
      {children}
    </div>
  );
};

export default ProductsLayout;
