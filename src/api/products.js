import axios from "axios";
import api from "./api";
import config from "@/config";

const getProducts = async () => {
  return await axios.get(`${config.apiUrl}/api/products`);
};

const getProductById = async (productId) => {
  return await axios.get(`${config.apiUrl}/api/products/${productId}`);
};

const getProductCategories = async () => {
  return await axios.get(`${config.apiUrl}/api/products/categories`);
};

const getProductsByUser = async () => {
  return await api.get(`/api/products/users`);
};

export { getProducts, getProductById, getProductsByUser, getProductCategories };
