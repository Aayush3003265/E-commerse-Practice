import { getProductCategories } from "@/api/products";
import AddProduct from "@/components/products/ProductForm";
import React from "react";

const AddProductPage = async () => {
  const categoriesResponse = await getProductCategories();
  return (
    <div>
      <section>
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <AddProduct categories={categoriesResponse.data} />
        </div>
      </section>
    </div>
  );
};

export default AddProductPage;
