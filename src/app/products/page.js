// "use client";
import ProductCard from "@/components/products/ProductCard";
import axios from "axios";
import React from "react";
import { Loader } from "./loading";
import BackButton from "../_component/BackButton";
import { getProducts } from "@/api/products";
import Drawer from "@/components/products/Drawer";
export const metadata = {
  title: {
    default: "Products",
  },
};
const ProductsPage = async ({ searchParams }) => {
  const response = await getProducts(await searchParams);
  const products = response.data;
  return (
    <div>
      <div className="mb-4">
        <BackButton />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
        {products?.map((product, index) => (
          <div key={index} className="text-xl text-white">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

// k xa
