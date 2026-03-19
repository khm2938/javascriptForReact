import { Cookies } from "react-cookie";

const cookies = new Cookies();

// 쿠키 저장 함수
export const setCookie = (name, value, days) => {
  const expires = new Date();
  expires.setUTCDate(expires.getUTCDate() + days); //보관기한
  //path: "/" 쿠키값이 저장될 장소, expires: expires 쿠키의 보관기한
  return cookies.set(name, value, { path: "/", expires: expires });
};

// 쿠키 조회 함수
export const getCookie = (name) => {
  return cookies.get(name);
};

// 쿠키 삭제 함수
export const removeCookie = (name, path = "/") => {
  cookies.remove(name, { path });
};
