import { createAsyncThunk } from "@reduxjs/toolkit";

import rootApi from "../../constants/rootApi.js";
import setAuthToken from "../../utils/setAuthToken.js";
import toast from "react-hot-toast";

export const getAllUsers = createAsyncThunk(
  "users/getAll",
  async (_, thunkAPI) => {
    console.log("Get All Users dispatched");
    try {
      setAuthToken(thunkAPI.getState().auth.token);
      const response = await rootApi.get("/users");
      if (response.status === 200) {
        toast.success(response.data.message);
        return response.data;
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
