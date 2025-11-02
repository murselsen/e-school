// Services
import createHttpError from "http-errors";
import refreshUser from "../../services/auth/refreshUser.js";

// Utils
import createCookieTokens from "../../utils/createCookieTokens.js";
import createResponse from "../../utils/createResponse.js";

// Constants

const refreshUserController = async (req, res, next) => {
  try {
    if (!req.cookies) throw createHttpError(400, "App - No cookies found");
    const { sessionId, refreshToken } = req.cookies;
    const newSessionData = await refreshUser({ sessionId, refreshToken });
    await createCookieTokens(res, newSessionData);
    res.status(200).json(
      createResponse(
        true,
        "User session refreshed successfully",
        {
          accessToken: newSessionData.accessToken,
        },
        200
      )
    );
  } catch (error) {
    next(error);
  }
};

export default refreshUserController;
