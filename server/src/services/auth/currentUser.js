// Models
import Session from "../../models/session.js";
import User from "../../models/user.js";

// Modules
import createHttpError from "http-errors";

const currentUser = async (token) => {
  if (!token) throw createHttpError(401, "currentUser: No token provided");

  const userSession = await Session.findOne({
    accessToken: token,
  });
  if (!userSession)
    throw createHttpError(401, "currentUser: Session not found");

  const user = await User.findById(userSession.associatedUserId);
  if (!user) throw createHttpError(404, "currentUser: User not found");
  console.log("CurrentUser - User:", user);
  return user;
};

export default currentUser;
