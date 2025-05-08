import axios from "axios";

const getProducts = async () => {
  return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
};

const getProductById = async (productId) => {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products${productId}`
  );
};

export { getProducts, getProductById };
