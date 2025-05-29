import config from "@/config";
import axios from "axios";

const loginAuth = async ({ email, password }) => {
  return await axios.post(`${config.apiUrl}/api/auth/login`, {
    email,
    password,
  });
};

export { loginAuth };
