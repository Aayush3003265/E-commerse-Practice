import Image from "next/image";
import React from "react";
import cartImg from "@/app/assets/images/shopping-cart.png";
import Link from "next/link";
import AddToCart from "./AddToCart";
import { PRODUCTS_ROUTE } from "@/app/constants/Routes";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full rounded-2xl shadow-lg ">
      <Link href={`/products/${product.id}`}>
        <div className="flex justify-center">
          <Image
            height={500}
            width={500}
            src={product.imageUrls[0] || cartImg}
            alt="img"
            className="w-full h-44 rounded-t-2xl object-cover"
          />
        </div>
      </Link>

      <div className="pt-5 pb-10 px-6 dark:bg-gray-600 rounded-t-sm rounded-b-2xl bg-white dark:text-white">
        <span className="bg-amber-300 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-amber-300 dark:text-black">
          {product.category}
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">
          {product.brand}
        </span>
        <Link href={`${PRODUCTS_ROUTE}/${product.id}`}>
          <h2 className="text-2xl font-semibold truncate mt-2 text-black hover:underline dark:text-white">
            {product.name}
          </h2>
        </Link>

        <p className="mt-2 font-bold text-black text-lg dark:text-white">
          $ {product.price}
        </p>
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductCard;
