import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
// import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { removefromcart } from "@/redux/cart/cartSlice";

const RemoveFromCartModal = ({
  showModal,
  setShowModal,
  selectedProduct,
  setSelectedProduct,
}) => {
  const dispatch = useDispatch();
  const confirmRemoveFromCart = () => {
    dispatch(removefromcart(selectedProduct));
    setShowModal(false);
    toast.success("Product Deleted Successfully", { autoClose: 750 });
  };
  return (
    <div className={showModal ? "block" : "hidden"}>
      <div className="flex bg-[#00000033] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full ">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 p-4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal">
              <IoCloseCircleOutline className="w-6 h-6" />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <FaExclamationTriangle className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
              <h3 className="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">
                Remove From Cart?
              </h3>
              <p className="text-xl mb-2 dark:text-gray-200">
                Product:{" "}
                <i>
                  <span className="font-bold">{selectedProduct?.name}</span>
                </i>
              </p>

              <button
                onClick={confirmRemoveFromCart}
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center disabled:opacity-80">
                Yes, I'm sure
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveFromCartModal;
