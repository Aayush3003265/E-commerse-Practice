// "use client";
import ProductCard from "@/components/products/ProductCard";
import axios from "axios";
import React from "react";
import { Loader } from "./loading";
import BackButton from "../_component/BackButton";
import { getProducts } from "@/api/products";
const ProductsPage = async () => {
  const response = await getProducts();
  const products = response.data;
  // console.log(products);

  // const [count, setCount] = useState(0);
  // const router = useRouter();
  // useEffect(() => {
  //   if (count > 5) {
  //     router.push("/");
  //   }
  // }, [count]);
  return (
    // <div>
    //   This is ProductsPage
    //   <p>Count:{count}</p>
    //   <button
    //     className="bg-red-500 rounded-3xl p-2.5 hover:cursor-pointer"
    //     onClick={() => setCount(() => count + 1)}>
    //     Count
    //   </button>
    // </div>
    <>
      <div className="mb-4">
        <BackButton />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
        {products?.map((product, index) => (
          <div key={index} className="text-xl text-white">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
