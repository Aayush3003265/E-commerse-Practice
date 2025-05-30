"use client";
import { getProductsByUser } from "@/api/products";
import ProductsTable from "@/components/products/Table";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ProductLoading from "@/components/admin/ProductLoading";
import AdminBackButton from "@/components/admin/AdminTableBackButton";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    getProductsByUser()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  // console.log(products);

  return (
    <section className="py-8  ">
      <div className="ml-4">
        <AdminBackButton />
      </div>

      <div className="flex items-center justify-between px-10 pb-6 dark:text-white">
        <h1 className="text-3xl font-semibold">Product Management</h1>
        <Link href={`/product-Management/add-Product`}>
          <div className="flex rounded-md gap-2 p-2 bg-green-500 items-center hover:cursor-pointer hover:text-black hover:bg-green-400">
            <FaPlus />
            Add Product
          </div>
        </Link>
      </div>
      {loading ? <ProductLoading /> : <ProductsTable products={products} />}
    </section>
  );
};

export default ProductManagement;
2334L7400722
