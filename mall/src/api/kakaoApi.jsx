import axios from "axios";
import { API_SERVER_HOST } from "./todoApi"; 

const rest_api_key = `b51a0f5458e61b787390240d8059b606`; //REST키값
const redirect_uri = `http://localhost:5173/member/kakao`;
const auth_code_path = `https://kauth.kakao.com/oauth/authorize`;

// 엑세스 토큰 얻기
const access_token_url = `https://kauth.kakao.com/oauth/token`;

// 인가코드 요청
export const getKakaoLoginLink = () => {
  const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  return kakaoURL;
};

// 카카오톡으로부터 access token 얻기
export const getAccessToken = async (authCode) => {
  const header = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  };
  const params = {
    grant_type: "authorization_code",
    client_id: rest_api_key,
    redirect_uri: redirect_uri,
    code: authCode,
  };

  const res = await axios.post(access_token_url, params, header);
  const accessToken = res.data.access_token;
  return accessToken;
};

// access token으로 카카오톡 사용자 정보 얻기
export const getMemberWithAccessToken = async (accessToken) => { 
  const res = await axios.get( 
    `${API_SERVER_HOST}/api/member/kakao?accessToken=${accessToken}`, 
  ); 
  return res.data; 
}; 
