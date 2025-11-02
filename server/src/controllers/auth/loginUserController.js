// Modules
import createHttpError from "http-errors";

// Services
import loginUser from "../../services/auth/loginUser.js";

// Utils
import createResponse from "../../utils/createResponse.js";
import createCookieTokens from "../../utils/createCookieTokens.js";
// Constants
import TIME from "../../constants/time.js";

const loginUserController = async (req, res, next) => {
  try {
    const payload = req.body;
    const session = await loginUser(payload);
    if (!session) throw createHttpError(400, "Login failed");
    await createCookieTokens(res, session);
    res.status(200).json(
      createResponse(
        true,
        "Login successful",
        {
          accessToken: session.accessToken,
          refreshToken: session.refreshToken,
        },
        200
      )
    );
  } catch (error) {
    next(error);
  }
};

export default loginUserController;
