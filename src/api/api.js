"use client";
import config from "@/config";
import axios from "axios";

const token = localStorage.getItem("authToken");
const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    Authorization: token,
  },
});

export default api;
