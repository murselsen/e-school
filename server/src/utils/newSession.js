import crypto from "crypto";
import { TIME } from "../constants/index.js";

const newSession = async () => {
  // Tokens
  const accessToken = crypto.randomBytes(32).toString("base64");
  const refreshToken = crypto.randomBytes(32).toString("base64");
  // Valid until
  const accessTokenValidUntil = new Date(Date.now() + TIME.FIFTEEN_MINUTES); // 15 minutes
  const refreshTokenValidUntil = new Date( Date.now() + TIME.SEVEN_DAYS); // 7 days

  return {
    accessToken,
    refreshToken,
    accessTokenValidUntil,
    refreshTokenValidUntil,
  };
};

export default newSession;
