// "use client";
import ProductCard from "@/components/products/ProductCard";
import axios from "axios";
import React from "react";
import { Loader } from "./loading";
import BackButton from "../_component/BackButton";
const ProductsPage = async () => {
  const response = await axios.get(
    "https://ecommerce-test-api-green.vercel.app/api/products"
  );
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
          <h2 key={index} className="text-xl text-white">
            <ProductCard product={product} />
          </h2>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
