import axiosInstance from "./axios";

// 실제 개발 중에는 자신의 로컬 IP를 사용해야 다른 디바이스(모바일 등)에서도 접근 가능
const API_URL = "http://192.168.200.192:9000"; // 현재 IP 주소로 설정해야함

// 전체 가게 목록 불러오기
export const getStores = async () => {
  // /stores 엔드포인트로 GET 요청
  const res = await axiosInstance.get(`${API_URL}/stores`);
  console.log(res);

  // 응답 데이터 반환 (가게 배열)
  return res.data;
};

// 특정 가게 ID로 상세 정보 불러오기
export const getStoreById = async (id: string) => {
  // /stores/:id 엔드포인트로 GET 요청
  const res = await axiosInstance.get(`${API_URL}/stores/${id}`);
  console.log(res);

  // 응답 데이터 반환 (단일 가게 객체)
  return res.data;
};
