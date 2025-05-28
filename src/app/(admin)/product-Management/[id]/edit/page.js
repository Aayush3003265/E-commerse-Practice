import React from "react";
// import AddProductPage from "../../add-Product/page";
import AddProduct from "@/components/products/ProductForm";
import { getProductById, getProductCategories } from "@/api/products";

const ProductEditPage = async ({ params }) => {
  const id = (await params).id;
  const response = await getProductById(id);
  const data = response.data;
  const categoriesResponse = await getProductCategories();
  return (
    <div>
      <section>
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white ">
            Edit <span className="underline italic text-2xl">{data?.name}</span>
          </h2>
          <AddProduct product={data} categories={categoriesResponse.data} />
        </div>
      </section>
    </div>
  );
};

export default ProductEditPage;
