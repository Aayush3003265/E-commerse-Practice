"use client";
import CartTable from "@/components/cart/Table";
import { useSelector } from "react-redux";

const Cartpage = () => {
  const { products, totalPrice } = useSelector((state) => state.cart);
  // console.log(totalPrice);

  return (
    <div className="dark:bg-slate-800 bg-gray-50 min-h-screen">
      <div className=" container mx-auto p-4 py-16">
        <div className="flex justify-between">
          <h1 className="text-3xl dark:text-white pb-5 font-semibold">
            Your Cart
          </h1>
          <p className="text-xl dark:text-white">
            Total Items: <span className="font-bold ">({products.length})</span>{" "}
          </p>
        </div>
        {products.length > 0 ? (
          <div>
            <CartTable products={products} />
            <div>
              <span className="text-xl border p-2 m-4 float-end dark:text-gray-100">
                Total : <span className="font-bold">(RS {totalPrice})</span>
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center text-3xl text-primary dark:text-gray-100 font-bold">
            Cart Is Empty
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
