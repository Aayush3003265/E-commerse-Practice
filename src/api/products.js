import axios from "axios";
import api from "./api";
import config from "@/config";

const createProduct = async (data) => {
  return await api.post(`/api/products`, data);
};

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
  return await axios.get(`${config.apiUrl}/api/products/user`);
};

export {
  getProducts,
  getProductById,
  getProductsByUser,
  getProductCategories,
  createProduct,
};
