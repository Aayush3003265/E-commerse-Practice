import api from "./api";

const createOrder = (data) => {
  api.post("/api/orders", data);
};
export { createOrder };
