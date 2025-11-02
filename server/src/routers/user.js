import { Router } from "express";

// Middlewares
import authenticate from "../middlewares/authenticate.js";
import authorizeRoles from "../middlewares/authorizeRoles.js";

// Constants
import Roles from "../constants/roles.js";

// Controllers
import getAllUsersController from "../controllers/user/getAllUsersController.js";

const userRouter = Router();

userRouter.get(
  "/",
  authenticate,
  authorizeRoles(Roles.ADMIN),
  getAllUsersController
);

export default userRouter;
