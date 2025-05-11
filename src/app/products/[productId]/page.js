import { getProductById } from "@/api/products";
import ProductDetailById from "@/components/products/ProductDetailById";

export const generateMetadata = async ({ params }) => {
  const response = await getProductById(params.productId);
  const product = response.data;

  return {
    title: product.name,
    keywords: `${product?.brand},${product.category}`,
  };
};

const fetchProductById = async (id) => {
  try {
    const response = await getProductById(id);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "Failed to fetch product");
  }
};

const ProductPage = async ({ params }) => {
  const product = await fetchProductById(params.productId);
  return <ProductDetailById product={product} />;
};

export default ProductPage;
