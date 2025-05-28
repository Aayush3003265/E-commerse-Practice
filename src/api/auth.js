import config from "@/config";
import api from "./api";

const loginAuth = async ({ email, password }) => {
  return await api.post(`${config.apiUrl}/api/auth/login`, {
    email,
    password,
  });
};

export { loginAuth };
