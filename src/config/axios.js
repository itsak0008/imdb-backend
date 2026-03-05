import axios from "axios";

const axiosInstance = axios.create({
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  console.log("Outgoing request to:", config.url);
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios Error:", error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance; // ✅ VERY IMPORTANT
