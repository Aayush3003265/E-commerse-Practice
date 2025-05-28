"use client";
import { getProducts } from "@/api/products";
import ProductsTable from "@/components/products/Table";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const ProductManagement = () => {
  const response = getProducts();
  return (
    <section className="py-8  ">
      <div className="flex items-center justify-between px-10 pb-6 dark:text-white">
        <h1 className="text-3xl font-semibold">Product Management</h1>
        <Link href={`/product-Management/add-Product`}>
          <div className="flex rounded-md gap-2 p-2 bg-green-500 items-center hover:cursor-pointer hover:text-black hover:bg-green-400">
            <FaPlus />
            Add Product
          </div>
        </Link>
      </div>
      <ProductsTable products={response.data} />
    </section>
  );
};

export default ProductManagement;
