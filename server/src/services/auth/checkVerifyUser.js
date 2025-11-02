import Session from "../../models/session.js";
import User from "../../models/user.js";

import createHttpError from "http-errors";

const checkVerifyUser = async (payload) => {
  // method adı : checkVerifyUser yorum : Kullanıcının doğrulanıp doğrulanmadığını kontrol eder
  const { accessToken } = payload;
  if (!accessToken) throw createHttpError(400, "Access token is required");

  const session = await Session.findOne({
    accessToken,
  });

  if (!session) throw createHttpError(401, "Session not found");

  const user = await User.findById(session.associatedUserId);
  if (!user) throw createHttpError(404, "User not found");

  return user.verify;
};

export default checkVerifyUser;
