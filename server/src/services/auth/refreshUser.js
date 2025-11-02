// Modules
import createHttpError from "http-errors";

// Models
import Session from "../../models/session.js";

// Utils
import newSession from "../../utils/newSession.js";

const refreshUser = async ({ sessionId, refreshToken }) => {
  console.log("RefreshUser - Payload:", { sessionId, refreshToken });

  const session = await Session.findOne({ _id: sessionId, refreshToken });
  if (!session) {
    throw createHttpError(401, "Session not found");
    return;
  }
  const isSessionTokenExpired =
    new Date() > new Date(session.refreshTokenVaildUntil);
  if (isSessionTokenExpired) {
    throw createHttpError(401, "Session token expired");
  }

  console.log("Old Session found:", session.accessToken);
  const newSessionData = await newSession();
  await Session.deleteOne({ _id: sessionId });

  const sessionCreatePayload = {
    associatedUserId: session.associatedUserId,
    ...newSessionData,
  };
  console.log("New Session data:", sessionCreatePayload.accessToken);

  return await Session.create(sessionCreatePayload);
};

export default refreshUser;
