import {
  createSlice,
  isPending,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";
import { getAllUsers } from "./operations.js";
const initialState = {
  data: null,
  isRefreshing: false,
  message: null,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        console.log("Get All Users - Action:", action);
        state.data = action.payload.data;
      })
      .addMatcher(isPending, (state) => {
        state.isRefreshing = true;
        state.error = null;
        state.message = null;
      })
      .addMatcher(isRejected, (state, action) => {
        console.log("Action rejected:", action);
        state.error = action.error ? action.error.message : null;
        state.isRefreshing = false;
      })
      .addMatcher(isFulfilled, (state) => {
        state.isRefreshing = false;
        state.error = null;
        state.message = null;
      });
  },
});

export default usersSlice.reducer;
