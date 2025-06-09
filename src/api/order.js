import api from "./api";

const createOrder = async (data) => {
  await api.post("/api/orders", data);
};
const getOrders = async () => {
  await api.get("/api/orders");
};
export { createOrder, getOrders };
