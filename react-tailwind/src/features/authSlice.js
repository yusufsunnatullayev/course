import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = "http://localhost:8000/users";

const initialState = {
  loading: false,
  success: false,
  error: false,
  users: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      axios.post(USER_URL, action.payload);
    },
    getUser: (state, action) => {
      axios.get(USER_URL);
    },
    deleteUserById: (state, action) => {
      axios.delete(`${USER_URL}/${action.payload}`);
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, getUser, deleteUserById } = authSlice.actions;
export default authSlice.reducer;
