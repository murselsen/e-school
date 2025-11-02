import createHttpError from "http-errors";

import Session from "../models/session.js";
import User from "../models/user.js";

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    next(
      createHttpError(401, "Authenticate: Please provide Authorization header")
    );
    return;
  }

  const bearer = authHeader.split(" ")[0];
  const token = authHeader.split(" ")[1];

  if (bearer !== "Bearer" || !token) {
    next(
      createHttpError(401, "Authenticate: Auth header should be of type Bearer")
    );
  }

  const session = await Session.findOne({
    accessToken: token,
  });

  if (!session) {
    next(createHttpError(401, "Authenticate: Session not found"));
    return;
  }
  const isAccessTokenExpired =
    new Date() > new Date(session.accessTokenVaildUntil);

  if (isAccessTokenExpired) {
    next(createHttpError(401, "Authenticate: Access token expired"));
    return;
  }
  console.log("Authenticate:", session);
  const user = await User.findById(session.associatedUserId);
  if (!user) {
    next(createHttpError(401, "Authenticate: User not found"));
    return;
  }

  next();
};

export default authenticate;
