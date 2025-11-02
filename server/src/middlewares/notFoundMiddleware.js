import createResponse from "../utils/createResponse.js";

const notFoundMiddleware = (req, res, next) => {
  res
    .status(404)
    .json(
      createResponse(
        false,
        "❌ | Express | Route not found",
        null,
        404,
        "NOT_FOUND"
      )
    );
};
export default notFoundMiddleware;
