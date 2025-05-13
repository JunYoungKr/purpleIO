import axios from "axios";

const API_URL = "http://192.168.200.192:9000"; // 현재 IP 주소로 설정해야함

export const getStores = async () => {
  const res = await axios.get(`${API_URL}/stores`);
  return res.data;
};

export const getStoreById = async (id: string) => {
  const res = await axios.get(`${API_URL}/stores/${id}`);
  return res.data;
};
