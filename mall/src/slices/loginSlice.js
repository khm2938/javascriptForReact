import { createSlice } from "@reduxjs/toolkit";

const initState = {
  email: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      console.log("로그인 .................. ");
    },
    logout: (state, action) => {
      console.log("로그아웃 ............... ");
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
