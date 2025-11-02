import { TIME } from "../constants/index.js";

const createCookieTokens = async (res, session) => {
  console.log(
    "createCookieTokens - Session:",
    session._id,
    session.refreshToken
  );
  res.cookie("refreshToken", session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + TIME.ONE_DAY),
  });

  res.cookie("sessionId", session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + TIME.ONE_DAY),
  });
};

export default createCookieTokens;
