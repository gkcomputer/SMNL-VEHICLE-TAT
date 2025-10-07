import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/UsersSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default Store;
