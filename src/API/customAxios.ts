import axios from "axios";
import BASE_URL from "../utils/baseUrl";

export const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const customAuthAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

customAuthAxios.interceptors.request.use(
  function (config) {
    const accessToken = JSON.parse(
      JSON.stringify(localStorage.getItem("access_token"))
    );

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
