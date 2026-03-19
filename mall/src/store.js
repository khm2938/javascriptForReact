import { configureStore } from "@reduxjs/toolkit";
import  loginSlice  from  './slices/loginSlice' 

export default configureStore({
  reducer: {
    // 여기에 slice reducer들을 추가하면 된다.
    "loginSlice":  loginSlice 
  },
});
