import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../utils/API";

// Fecthing all users from DB
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await API.get("/users/fetchUsers");
  return response.data;
});

// Adding new user
export const addUser = createAsyncThunk("/users/addUser", async (user) => {
  const response = await API.post("/users/addUser", user);
  return response.data;
});

// Edit User
export const editUser = createAsyncThunk(
  "/users/editUser",
  async (editUser) => {
    const response = await API.post("/users/editUser", editUser);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
    newUser: {},
    status: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.usersList = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.usersList.push(action.payload);
      })
      .addCase(
        addUser.rejected,
        (state, action) => (state.error = action.error.message)
      );
  },
});

export default usersSlice.reducer;
