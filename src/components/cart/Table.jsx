"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import placeholder from "@/app/assets/images/shopping-cart.png";
import { GoPlus } from "react-icons/go";
import { RiSubtractFill } from "react-icons/ri";
import { decreaseQuantity, increaseQuantity } from "@/redux/cart/cartSlice";
import { IoIosCog } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import RemoveFromCartModal from "./Modal";

const CartTable = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();
  // const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeBtnClicked = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-16 py-3 text-center">
              <span className=" text-xl">Image</span>
            </th>
            <th scope="col" className="px-6 py-3 text-center  text-xl">
              Product
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xl">
              Qty
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xl">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xl">
              Total Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 flex items-center justify-center text-xl">
              <IoIosCog className="h-7 w-7" />
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => {
            const actualproduct = item.product;
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                <td className="px-6 py-4 flex items-center justify-center">
                  <Image
                    src={actualproduct.imageUrls?.[0] ?? placeholder}
                    className="h-15 w-auto"
                    height={1000}
                    width={1000}
                    alt={actualproduct.name}
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {actualproduct.name}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center">
                    <button
                      disabled={item.quantity === 1}
                      onClick={() => dispatch(decreaseQuantity(actualproduct))}
                      className="inline-flex items-center justify-center p-1
                      me-3 h-7 w-7 rounded-full hover:bg-gray-100 focus:ring-4
                      focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400
                      dark:border-gray-600 dark:hover:bg-gray-700
                      dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button">
                      <RiSubtractFill className="h-7 w-7" />
                    </button>
                    <div>
                      <p className="text-center appearance-none bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg fpx-0 py-1 dark:bg-gray-700 dark:border-gray-600  dark:text-white ">
                        {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(increaseQuantity(actualproduct))}
                      className="inline-flex items-center justify-center p-1 me-3 ms-2.5 h-7 w-7 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                      disabled={
                        item.quantity >= (actualproduct.price > 100000 ? 4 : 15)
                      }>
                      <GoPlus className="h-7 w-7" />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  $ {actualproduct.price}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  $ {actualproduct.price * item.quantity}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => removeBtnClicked(actualproduct)}
                    // href={`/product-Management/${product.id}/edit`}
                    className="font-medium text-blue-600 dark:text-blue-500
                    hover:underline">
                    <div>
                      <FaTrashAlt className="h-6 w-6 bg-red-600 text-white p-1 rounded-md" />
                    </div>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <RemoveFromCartModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
};

export default CartTable;
