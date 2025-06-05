// "use client";
import ProductCard from "@/components/products/ProductCard";
import React from "react";
import BackButton from "../_component/BackButton";
import { getBrands, getProductCategories, getProducts } from "@/api/products";
import FilterButton from "@/components/products/FilterButton";
import Search from "@/components/products/Search";
export const metadata = {
  title: {
    default: "Products",
  },
};
const ProductsPage = async ({ searchParams }) => {
  const response = await getProducts(await searchParams);
  const brandsResponse = await getBrands();
  const categoriesResponse = await getProductCategories();
  const categories = categoriesResponse?.data;
  const brands = brandsResponse?.data;
  const products = response?.data;

  return (
    <div>
      <div className="mb-4 grid grid-cols-[1fr_auto_auto] gap-3 ">
        <BackButton />
        <Search />
        <FilterButton brands={brands} categories={categories} />
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
