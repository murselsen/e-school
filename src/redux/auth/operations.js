import { createAsyncThunk } from "@reduxjs/toolkit";
import rootApi from "../../constants/rootApi.js";

// Utils
import setAuthToken from "../../utils/setAuthToken.js";
import toast from "react-hot-toast";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (_, thunkAPI) => {
    console.log("Login User dispatched");
    try {
      const response = await rootApi.post("auth/login", _);
      console.log("Login Response:", response);
      if (response.status === 200) {
        setAuthToken(response.data.data.accessToken);
        thunkAPI.dispatch(currentUser());
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (_, thunkAPI) => {
    console.log("Register User dispatched");
    try {
      toast.loading("Registering user...");

      const response = await rootApi.post("auth/register", _);

      if (response.status === 201) {
        setAuthToken(response.data.data.accessToken);
        toast.success("Registration successful");
        return response.data;
      } else {
        return thunkAPI.rejectWithValue("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  }
);

export const refreshUserToken = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    console.log("Refresh token dispatched");
    try {
      console.log("Attempting to refresh token...");

      const response = await rootApi.post("auth/refresh");

      if (response.status === 200) {
        setAuthToken(response.data.data.accessToken);
        // Token yenilendi, kullanıcıyı getir
        thunkAPI.dispatch(currentUser());
        toast.success("Session refreshed");
        return response.data;
      } else {
        toast.error(response.data.data.message);
        thunkAPI.dispatch(logoutUser());
      }
    } catch (error) {
      console.error("Error during token refresh:", error);
      if (error.response && error.response.status === 401) {
        toast.error("Session expired. Please log in again.");
        thunkAPI.dispatch(logoutUser());
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const response = await rootApi.post("auth/logout");
      setAuthToken(null);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  "auth/currentUser",
  async (_, thunkAPI) => {
    console.log("Current user fetched");
    try {
      const response = await rootApi.get("auth/current");
      if (response.status === 200) {
        return response.data;
      } else {
        console.log(response.data.data.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
