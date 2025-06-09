import React from "react";

const Checkout = ({ totalPrice, products }) => {
  const checkoutOrder = () => {
    createOrder({
      orderItems: products.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
      totalPrice,
    });
  };
  return (
    <div className="flex justify-between items-center">
      <span className="text-xl border p-2 m-4 dark:text-gray-100 rounded-md ">
        Total : <span className="font-bold">(RS {totalPrice})</span>
      </span>
      <div>
        <button
          onClick={checkoutOrder}
          className="text-xl border p-2 m-4 bg-blue-600 text-white rounded-md hover:opacity-80 hover:cursor-pointer dark:text-gray-100">
          {" "}
          Checkout |<span className="font-bold"> {totalPrice}</span>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
