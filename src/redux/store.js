import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducers
import authRecuder from "./auth/slice.js";
import usersReducer from "./user/slice.js";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token", "user", "isLoggedIn"],
};

const authPersisteredReducer = persistReducer(authPersistConfig, authRecuder);

export const store = configureStore({
    reducer: {
        auth: authPersisteredReducer,
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false, thunk: true})


});

export let persistor = persistStore(store);
