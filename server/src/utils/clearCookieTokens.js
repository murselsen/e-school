const clearCookieTokens = (req) => {
  req.clearCookie("refreshToken");
  req.clearCookie("sessionId");
};
export default clearCookieTokens;
