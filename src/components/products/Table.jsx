import Image from "next/image";
import React from "react";
import { IoIosCog } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import Link from "next/link";

const ProductsTable = ({ products }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-8 dark:border-slate-300 dark:shadow-slate-300 dark:border">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Prices
            </th>
            <th scope="col" className="px-6 py-3">
              Created At
            </th>
            <th scope="col" className="px-6 py-3 ">
              <div className="flex items-center justify-center">
                <IoIosCog className="h-6 w-6" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 py-4 flex items-center justify-center">
                <Image
                  width={300}
                  height={300}
                  src={product.imageUrls[0]}
                  alt={product.name}
                  className="h-15 w-auto"
                />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {product.name}
              </th>
              <td className="px-6 py-4">{product.brand}</td>
              <td className="px-6 py-4">{product.category}</td>
              <td className="px-6 py-4">${product.price}</td>
              <td className="px-6 py-4">{product.createdAt}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <Link
                    href={`/product-Management/${product.id}/edit`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    <div>
                      <MdModeEdit className="h-5 w-5 bg-blue-600 text-white p-1 rounded-md" />
                    </div>
                  </Link>
                  <Link
                    href={`/product-Management/${product.id}/edit`}
                    className="font-medium text-blue-600 dark:text-blue-500  hover:underline">
                    <div>
                      <FaTrashAlt className="h-5 w-5 bg-red-600 text-white p-1 rounded-md" />
                    </div>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
