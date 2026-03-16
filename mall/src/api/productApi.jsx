import axios from "axios";
import { API_SERVER_HOST } from "./todoApi";


//서버 주소
const prefix = `${API_SERVER_HOST}/api/products`;


//http://localhost:8080/api/products/read/{pno}
export const getOne = async (pno) => {
  const res = await axios.get(`${prefix}/${pno}`);
  return res.data;
};

//http://localhost:8080/api/products/list?page=1&size=10
export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};

//http://localhost:8080/api/products/
export const postAdd = async (product) => {
  //파일업로드 할때에는 기본값인  ‘Content-Type’: ‘application/json’을 ‘multipart/form-data’ 변경해야됨 
const header = { headers: { 'Content-Type': 'multipart/form-data' } }; 
  const res = await axios.post(`${prefix}/`, product, header);
  return res.data;
};

//http://localhost:8080/api/products/{pno} method=delete
export const deleteOne = async (pno) => {
  const res = await axios.delete(`${prefix}/${pno}`);
  return res.data;
}

//http://localhost:8080/api/products/{pno} method=put
export const putOne = async (product) => {
  const res = await axios.put(`${prefix}/${product.pno}`, product)
  return res.data
}