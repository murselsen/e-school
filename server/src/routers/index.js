import { Router } from "express";

// Routers
import authRouter from "./auth.js";
import userRouter from "./user.js";

import createResponse from "../utils/createResponse.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(
    createResponse(true, "✅ | Express | Server is running...", {}, 200)
  );
});

router.use("/auth", authRouter);
router.use("/users", userRouter);

export default router;
