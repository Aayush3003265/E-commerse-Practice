import Image from "next/image";
import React from "react";
import cartImg from "@/app/assets/images/shopping-cart.png";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full h-max rounded-2xl shadow dark:shadow-amber-100 px-8 py-8 ">
      <div className="flex justify-center">
        <Image
          height={500}
          width={500}
          src={cartImg}
          alt="img"
          className="w-auto h-32"
        />
      </div>

      <div className="py-3">
        <h2 className="text-2xl font-semibold truncate">{product.name}</h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
          {product.category}
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
          {product.brand}
        </span>
        <p>$ {product.price}</p>
        <button className="rounded shadow dark:shadow-white px-4 py-2 dark:bg-zinc-800">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
