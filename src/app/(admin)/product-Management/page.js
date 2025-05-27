import { getProducts } from "@/api/products";
import ProductsTable from "@/components/products/Table";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import React from "react";

const ProductManagement = async () => {
  const response = await getProducts();
  return (
    <section className="py-8 dark:bg-gray-600">
      <div className="flex items-center justify-between px-10 pb-6 dark:text-white">
        <h1 className="text-3xl font-semibold">Product Management</h1>
        <div className="flex rounded-md gap-2 p-2 bg-green-500 items-center hover:cursor-pointer hover:text-black hover:bg-green-400">
          <FaPlus />
          <Link href={`/product-Management/add-Product`}>Add Product</Link>
        </div>
      </div>
      <ProductsTable products={response.data} />
    </section>
  );
};

export default ProductManagement;
