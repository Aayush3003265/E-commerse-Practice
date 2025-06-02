"use client";
import { getProducts, getProductsByUser } from "@/api/products";
import ProductsTable from "@/components/products/Table";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import ProductLoading from "@/components/admin/ProductLoading";
import AdminBackButton from "@/components/admin/AdminTableBackButton";
import { CiViewTimeline } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteStatus } from "@/redux/product/productSlice";
import { ROLE_ADMIN } from "@/app/constants/Role";

const ProductManagement = () => {
  const { user } = useSelector((state) => state.auth);
  const { deleteStatus } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    // if (!isDeleted) return;
    getProductsByUser()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false), dispatch(setDeleteStatus(null)));
  }, [deleteStatus, dispatch]);
  // console.log(products);

  const fetchAllProducts = () => {
    setLoading(true);
    getProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  return (
    <section className="py-8  ">
      <div className="ml-4">
        <AdminBackButton />
      </div>

      <div className="grid grid-cols-[1fr_auto_auto] gap-3 items-center justify-between dark:text-teal-50  text-black px-10 pb-6 ">
        <h1 className="text-3xl font-semibold">Product Management</h1>
        {user?.roles?.includes(ROLE_ADMIN) && (
          <button onClick={fetchAllProducts}>
            <div className="flex rounded-md gap-2 p-2 bg-green-200 items-center hover:cursor-pointer hover:text-black hover:bg-green-300">
              <CiViewTimeline />
              View All Products
            </div>
          </button>
        )}

        <Link href={`/product-Management/add-Product`}>
          <div className="flex rounded-md gap-2 p-2 bg-green-500 items-center text-teal-50 hover:cursor-pointer hover:bg-green-600">
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
// 2334L7400722
