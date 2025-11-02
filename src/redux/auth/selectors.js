export const selectAuth = (state) => state.auth;

export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectVerify = (state) => state.auth.verify;

export const selectUserRole = (state) => state.auth.user.role;

