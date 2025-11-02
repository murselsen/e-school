// Modules
import createHttpError from "http-errors";

// Services
import getAllUsers from "../../services/user/getAllUsers.js";

// Utils
import createResponse from "../../utils/createResponse.js";

const getAllUsersController = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res
      .status(200)
      .json(createResponse(true, "Users fetched successfully", users, 200));
  } catch (error) {
    next(error);
  }
};

export default getAllUsersController;
