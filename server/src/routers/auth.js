import { Router } from "express";

// Validation Schemas
import registerUserSchema from "../validation/auth/registerUser.js";
import {
  emailUserSchema,
  usernameUserSchema,
} from "../validation/auth/loginUser.js";

// Middlewares
import validateBody from "../middlewares/validateBody.js";
import authenticate from "../middlewares/authenticate.js";

// Controllers
import registerUserController from "../controllers/auth/registerUserController.js";
import loginUserController from "../controllers/auth/loginUserController.js";
import logoutUserController from "../controllers/auth/logoutUserController.js";
import refreshUserController from "../controllers/auth/refreshUserController.js";
import currentUserController from "../controllers/auth/currentUserController.js";

const authRouter = Router();

authRouter.post(
  "/register",
  validateBody(registerUserSchema),
  registerUserController
);

authRouter.post(
  "/login",
  validateBody(emailUserSchema, usernameUserSchema),
  loginUserController
);
authRouter.post("/refresh", refreshUserController);
authRouter.post("/logout", logoutUserController);

authRouter.get("/current", authenticate, currentUserController);

export default authRouter;
