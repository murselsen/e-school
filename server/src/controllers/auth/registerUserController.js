import createResponse from "../../utils/createResponse.js";
import registerUser from "../../services/auth/registerUser.js";
import createHttpError from "http-errors";

const registerUserController = async (req, res, next) => {
  let result;
  try {
    const payload = req.body;
    result = await registerUser(payload);
    if (!result) throw createHttpError(400, "User registration failed");
    res
      .status(201)
      .json(createResponse(true, "User registered successfully", result, 201));
  } catch (error) {
    next(error);
  }
};

export default registerUserController;
