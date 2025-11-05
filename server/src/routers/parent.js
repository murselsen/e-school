import { Router } from "express";
import authenticate from "../middlewares/authenticate.js";
import authorizeRoles from "../middlewares/authorizeRoles.js";
import Roles from "../constants/roles.js";
import validateBody from "../middlewares/validateBody.js";


// Validation Schemas
import registerParentSchema from "../validation/parent/registerParent.js";
import registerParentController from "../controllers/parent/registerParentController.js";

const parentRouter = Router();

parentRouter.post("/register",
    authenticate, authorizeRoles(Roles.PARENT), validateBody(registerParentSchema), registerParentController)

export default parentRouter;