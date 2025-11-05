import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import rootApi from "../../constants/rootApi.js";

export const registerParent = createAsyncThunk(
    "parent/register",
    async (payload, thunkAPI) => {
        try {
            const response = await rootApi.post("/parent/register", payload);
            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)