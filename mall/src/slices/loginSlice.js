import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginPost } from "../api/memberApi";
import { getCookie, removeCookie, setCookie } from "../util/cookieUtil";

const initState = {
  email: "",
};

const loadMemberCookie = () => {
  const memberInfo = getCookie("member");
  if (memberInfo && memberInfo.nickname) {
    memberInfo.nickname = decodeURIComponent(memberInfo.nickname);
  }
  return memberInfo ? memberInfo : initState;
};

// 로그인 요청을 보내는 비동기 액션 생성
// createAsyncThunk는 비동기 작업을 처리하기 위한 유틸리티 함수입니다. 첫 번째 인자는 액션 타입의 접두사이고, 두 번째 인자는 비동기 작업을 수행하는 함수입니다. 이 함수는 Promise를 반환해야 합니다. createAsyncThunk는 세 가지 액션 타입을 자동으로 생성합니다: pending, fulfilled, rejected. 이 액션들은 비동기 작업의 상태를 나타냅니다. 예를 들어, loginPostAsync.pending은 로그인 요청이 시작되었음을 나타내고, loginPostAsync.fulfilled는 로그인 요청이 성공적으로 완료되었음을 나타내며, loginPostAsync.rejected는 로그인 요청이 실패했음을 나타냅니다.
export const loginPostAsync = createAsyncThunk("loginPostAsync", (param) => {
  return loginPost(param);
});

const loginSlice = createSlice({
  name: "loginSlice",
  // 초기 상태를 설정하는 부분입니다. loadMemberCookie 함수를 호출하여 쿠키에서 로그인 정보를 불러오거나, 쿠키가 없으면 initState를 사용합니다. 이렇게 하면 사용자가 페이지를 새로고침해도 로그인 상태가 유지됩니다.
  initialState: loadMemberCookie() || initState,
  reducers: {
    login: (state, action) => {
      //{email, pw 로 구성 }
      const data = action.payload;
      console.log("로그인 ");
      setCookie("member", JSON.stringify(data), 1); // 1일 동안 쿠키 유지 
      //새로운 상태
      return { email: data.email };
    },
    logout: (state, action) => {
      console.log("로그아웃 ");
      removeCookie("member");
      return { ...initState };
    },
  },
  //비동기 작업이 완료되었을 때 상태를 업데이트하는 로직을 작성하는 곳
  extraReducers: (builder) => {
    builder
      .addCase(loginPostAsync.fulfilled, (state, action) => {
        console.log("fulfilled : 완료" + action.payload.nickname);
        // 로그인 성공 시 쿠키에 토큰 저장
        if(!action.payload.error) {
          console.log("쿠키 저장 : " + action.payload.nickname);
          setCookie("member", JSON.stringify(action.payload), 1); // 1일 동안 쿠키 유지
        }
        return action.payload; // 로그인 성공 시 반환된 데이터를 상태로 설정
      })
      .addCase(loginPostAsync.pending, (state, action) => {
        console.log("pending : 처리중");
      })
      .addCase(loginPostAsync.rejected, (state, action) => {
        console.log("rejected : 오류");
      });
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
