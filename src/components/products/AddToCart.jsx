"use client";
import { addToCart } from "@/redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddToCart = ({ product }) => {
  // console.log(product);
  const dispatch = useDispatch();
  const addProductToCart = () => {
    delete product.description;
    dispatch(addToCart(product));
    toast.success("Product Added To Cart", { autoClose: 750 });
  };
  return (
    <div>
      <button
        onClick={addProductToCart}
        className="rounded shadow hover:bg-slate-800 px-4 w-full mt-2 p-1 md:bg-blue-700 bg-amber-400 hover:cursor-pointer dark:bg-slate-900">
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
