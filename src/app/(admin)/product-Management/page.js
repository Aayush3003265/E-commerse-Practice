import { getProducts } from "@/api/products";
import ProductsTable from "@/components/products/Table";
import React from "react";

const ProductManagement = async () => {
  const response = await getProducts();
  return (
    <section className="py-8 pr-5">
      <ProductsTable products={response.data} />
    </section>
  );
};

export default ProductManagement;
