import {
    createSlice,
    isFulfilled,
    isPending,
    isRejected,
} from "@reduxjs/toolkit";
import {
    loginUser,
    refreshUserToken,
    logoutUser,
    registerUser,
    currentUser,
} from "./operations";

// Utils
import toast from "react-hot-toast";

const authToastId = "authNotification";
toast("", {id: authToastId, duration: 1});
const initialState = {
    user: {
        username: null,
        email: null,
        role: null,
        verify: null
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    message: null,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
            state.message = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(currentUser.fulfilled, (state, action) => {
                state.user = action.payload.data.user;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.token = action.payload.data.accessToken;
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log("Login rejected action:", action);
            })

            .addCase(refreshUserToken.fulfilled, (state, action) => {
                state.token = action.payload.data.accessToken;
                if (state.isLoggedIn === false) state.isLoggedIn = true;
            })

            .addCase(registerUser.fulfilled, (state) => {
                state.isRefreshing = false;
                state.message = "Registration successful. Please log in.";
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.token = null;
                state.user = {
                    username: null,
                    email: null,
                    role: null,
                };
            })
            .addMatcher(isPending, (state) => {
                state.isRefreshing = true;
                state.error = null;
                state.message = null;
                toast.loading("Processing...", {id: authToastId});
            })

            // Tüm başarılı isteklerde loading durumunu kapat
            .addMatcher(isFulfilled, (state) => {
                state.isRefreshing = false;
                toast.remove(authToastId);
                toast.success("Operation successful", {
                    id: authToastId,
                    duration: 2000,
                });
            })

            .addMatcher(isRejected, (state, action) => {
                console.log("Action rejected:", action);
                state.error = action.error ? action.error.message : null;
                state.isRefreshing = false;
                toast.remove(authToastId);
                toast.error(state.error || "An error occurred", {id: authToastId});
            });
    },
});

export default authSlice.reducer;
