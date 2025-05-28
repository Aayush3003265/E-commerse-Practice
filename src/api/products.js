import api from "./api";

const getProducts = async () => {
  return await api.get(`/api/products`);
};

const getProductsByUser = async () => {
  return await api.get(`/api/products/users`);
};

const getProductById = async (productId) => {
  return await api.get(`/api/products/${productId}`);
};
const getProductCategories = async () => {
  return await api.get(`/api/products/categories`);
};

export { getProducts, getProductById, getProductsByUser, getProductCategories };
