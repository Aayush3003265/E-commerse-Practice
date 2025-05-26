import config from "@/config";
import api from "./api";
import axios from "axios";

const getProducts = async () => {
  return await axios.get(`${config.apiUrl}/api/products`);
};

const getProductsByUser = async () => {
  return await axios.get(`${config.apiUrl}/api/products/users`);
};

const getProductById = async (productId) => {
  return await axios.get(`${config.apiUrl}/api/products/${productId}`);
};

export { getProducts, getProductById, getProductsByUser };
