// Modules
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routes
import router from "./routers/index.js";

// Middlewares
import notFoundMiddleware from "./middlewares/notFoundMiddleware.js";
import serverErrorMiddleware from "./middlewares/serverErrorMiddleware.js";

// Utils
import {env} from "./utils/env.js";

const PORT = env("PORT", 5000); // Port

const initServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(cookieParser());
    app.use(
        cors({
            origin: [
                "http://localhost:5173",
                "http://localhost:4173",

                "https://e-school-blond.vercel.app/",
            ],
            credentials: true, // cookie gönderimi için şart
        })
    );

    app.use("/", router);
    app.use("/api", router);

    app.use(notFoundMiddleware);
    app.use(serverErrorMiddleware);

    app.listen(PORT, (error) => {
        if (error) throw error;

        console.log("✅´| Express | Server is running on port: ", PORT);
    });

    return app;
};

export default initServer;
