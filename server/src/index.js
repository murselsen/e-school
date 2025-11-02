import initServer from "./server.js";
import initMongoDB from "./db/initMongodb.js";

import ServerlessHttp from "serverless-http";

await initMongoDB();
const app = await initServer();

export default app;
export const serverlessHandler = ServerlessHttp(app);
