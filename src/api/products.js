import axios from "axios";
import api from "./api";
import config from "@/config";

const createProduct = async (data) => {
  return await api.post(`/api/products`, data);
};

const updateProduct = async (id, data) => {
  return await api.put(`/api/products/${id}`, data);
};
const deleteProduct = async (id) => {
  return await api.delete(`/api/products/${id}`);
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
  return await api.get(`/api/products/users`);
};

export {
  getProducts,
  getProductById,
  getProductsByUser,
  getProductCategories,
  createProduct,
  updateProduct,
  deleteProduct,
};
