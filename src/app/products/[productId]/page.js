import { getProductById } from "@/api/products";
import BackButton from "@/app/_component/BackButton";
import axios from "axios";
import Image from "next/image";
// import React, { useEffect, useState } from "react";

const ProductId = async ({ params }) => {
  // const [product, setProduct] = useState(null);
  const productId = await params.id;

  const response = await getProductById(productId).catch((error) => {
    throw new Error(error.response.data);
  });
  console.log(response.data);

  return response.data;
};
const SanoProductById = async ({ params }) => {
  const product = await ProductId({ params });
  return (
    <>
      <div className="max-w-7xl mx-auto p-6 ">
        <BackButton />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {/* Left Side: Image & Gallery */}
          <div className="flex flex-col h-auto">
            <div className="border p-4 rounded-xl shadow-sm">
              <Image
                src={product.imageUrls[0]}
                alt={product.title}
                height={500}
                width={500}
                className=" object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              {product.imageUrls?.map((image, index) => {
                return (
                  <div className="border-2 border-slate-800 h-[100px] w-[100px] p-2">
                    <Image
                      src={image}
                      width={100}
                      height={100}
                      alt={product.name}
                      key={index}
                      className="object-cover h-full w-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {product.description}
              </p>
              <p className="text-2xl font-semibold text-gray-900 mt-4">
                Rs. {product.price}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="block text-sm text-gray-600 mb-1">Color</span>
                <div className="w-8 h-8 rounded-full border border-gray-300 bg-yellow-400"></div>
                <div className="w-8 h-8 rounded-full border border-gray-300 bg-black"></div>
                <div className="w-8 h-8 rounded-full border border-gray-300 bg-blue-300"></div>
                <div className="w-8 h-8 rounded-full border border-gray-300 bg-red-400"></div>
              </div>

              <div className="mt-6">
                <label htmlFor="quantity" className="block mb-1 text-sm">
                  Qty
                </label>
                <select
                  id="quantity"
                  className="border rounded px-3 py-2 w-20"
                  defaultValue={1}>
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <option key={qty}>{qty}</option>
                  ))}
                </select>
              </div>

              <button className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
                Add to Bag
              </button>
            </div>

            <div className="mt-8 border-t pt-4 text-sm text-gray-600">
              <p className="underline mb-2 cursor-pointer">
                Product Details & Shipping
              </p>
              <p className="underline cursor-pointer">Discover More Styles</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Rate This Product: </h1>
      </div>
    </>
  );
};

export default SanoProductById;
