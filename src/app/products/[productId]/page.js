import BackButton from "@/app/_component/BackButton";
import React from "react";

const ProductId = async ({ params }) => {
  const ProductId = await params.productId;
  return (
    <div>
      <BackButton />
      THis is ProductId page{ProductId}
    </div>
  );
};

export default ProductId;
