import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.200.192:9000",
  timeout: 5000,
});

export default axiosInstance;
