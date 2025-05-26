import config from "@/config";
import authToken from "@/helper/authToken";
import axios from "axios";
const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

export default api;
