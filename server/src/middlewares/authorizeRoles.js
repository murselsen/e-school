// Models
import User from "../models/user.js";
import Session from "../models/session.js";

// Modules
import createHttpError from "http-errors";

const authorizeRoles =
  (...allowedRoles) =>
  async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      const authorizationToken = authHeader.split(" ")[1];

      const isSession = await Session.findOne({
        accessToken: authorizationToken,
      });
      if (!isSession)
        throw createHttpError(403, "authorizeRoles: Invalid session");

      const user = await User.findById(isSession.associatedUserId);
      if (!user) throw createHttpError(403, "authorizeRoles: User not found");

      const isAllowed = allowedRoles.includes(user.role);
      if (!isAllowed)
        throw createHttpError(403, "authorizeRoles: Access denied");
      next();
    } catch (error) {
      next(error);
    }
  };

export default authorizeRoles;
