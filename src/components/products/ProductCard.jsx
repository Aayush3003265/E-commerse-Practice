import Image from "next/image";
import React from "react";
import cartImg from "@/app/assets/images/shopping-cart.png";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full h-max rounded-2xl shadow-lg   px-8 py-8 ">
      <Link href={`/products/${product.id}`}>
        <div className="flex justify-center">
          <Image
            height={500}
            width={500}
            src={product.imageUrls[0] || cartImg}
            alt="img"
            className="w-auto h-32"
          />
        </div>
      </Link>

      <div className="py-3">
        <span className="bg-amber-300 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-amber-300 dark:text-black">
          {product.category}
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
          {product.brand}
        </span>
        <Link href={`/products/${product.id}`}>
          <h2 className="text-2xl font-semibold truncate text-black hover:underline">
            {product.name}
          </h2>
        </Link>

        <p>$ {product.price}</p>
        <button className="rounded shadow dark:shadow-white px-4 py-1 mt-1 hover:cursor-pointer dark:bg-zinc-800">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
