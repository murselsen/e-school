import createHttpError from "http-errors";
import createResponse from "../../utils/createResponse.js";

// Services
import currentUser from "../../services/auth/currentUser.js";

const currentUserController = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const currentUserData = await currentUser(token);

    res
      .status(200)
      .json(
        createResponse(
          true,
          "Current user fetched successfully",
          { user: currentUserData },
          200
        )
      );
  } catch (error) {
    next(error);
  }
};

export default currentUserController;
