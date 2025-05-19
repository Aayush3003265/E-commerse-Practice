import React from "react";

const ProductsLayout = ({ children }) => {
  return (
    <div className="max-w-screen-xl container mx-auto p-4 ">
      <h1 className="text-4xl font-bold text-center">Products Page</h1>
      {children}
    </div>
  );
};

export default ProductsLayout;
