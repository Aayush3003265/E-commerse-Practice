import config from "@/config";
import axios from "axios";

const getProducts = async () => {
  return await axios.get(`${config.apiUrl}/api/products`);
};

const getProductById = async (productId) => {
  return await axios.get(`${config.apiUrl}/api/products/${productId}`);
};

export { getProducts, getProductById };
