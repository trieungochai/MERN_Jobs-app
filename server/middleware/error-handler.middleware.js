const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors");

const errorHandlerMiddleware = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.StatusCodes).json({ message: error.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
};

module.exports = errorHandlerMiddleware;
