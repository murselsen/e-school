// Services
import logoutUser from "../../services/auth/logoutUser.js";
// Utils
import clearCookieTokens from "../../utils/clearCookieTokens.js";
import createResponse from "../../utils/createResponse.js";

const logoutUserController = async (req, res, next) => {
  try {
    if (req.cookies.sessionId) {
      await logoutUser({ sessionId: req.cookies.sessionId });
    }
    clearCookieTokens(res);
    res
      .status(204)
      .json(createResponse(true, "Logged out successfully", null, 204));
  } catch (error) {
    next(error);
  }
};

export default logoutUserController;
