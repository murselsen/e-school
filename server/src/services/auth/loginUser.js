// Models
import User from "../../models/user.js";
import Session from "../../models/session.js";
// Modules
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

// Services
// *

// Utils
import newSession from "../../utils/newSession.js";

// Login user - service
const loginUser = async (payload) => {
  let existingUser;
  if (payload.email) {
    existingUser = await User.findOne({
      email: payload.email,
    });
    if (!existingUser) throw createHttpError(404, "User not found");
  }
  if (payload.username) {
    existingUser = await User.findOne({
      username: payload.username,
    });
    if (!existingUser) throw createHttpError(404, "User not found");
  }

  const isPasswordValid = await bcrypt.compare(
    payload.password,
    existingUser.password
  );
  if (!isPasswordValid) throw createHttpError(401, "Invalid credentials");

  const isSessionSeleted = await Session.deleteMany({
    associatedUserId: existingUser._id,
  });
  if (!isSessionSeleted)
    throw createHttpError(500, "LoginUser: Session deletion failed");

  const newSessionData = await newSession();

  await User.findByIdAndUpdate(existingUser._id, {
    lastLogin: new Date(),
  });

  const sessionCreatePayload = {
    associatedUserId: existingUser._id,
    ...newSessionData,
  };

  return await Session.create(sessionCreatePayload);
};

export default loginUser;
