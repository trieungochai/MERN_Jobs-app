const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors");

const errorHandlerMiddleware = (error, req, res, next) => {
  let customError = {
    // set default
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || "Something went wrong, please try again later",
  };

  // if (error instanceof CustomAPIError) {
  //   return res.status(error.StatusCodes).json({ message: error.message });
  // }
  if (error.name === "ValidationError") {
    customError.message = Object.values(error.errors)
      .map((item) => item.message)
      .join(", ");
    customError.statusCode = 400;
  }

  if (error.code && error.code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(
      error.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }

  if (error.name === "Cast Error") {
    customError.message = `No item found with id: ${error.value}`;
    customError.statusCode = 404;
  }

  return res
    .status(customError.statusCode)
    .json({ message: customError.message });
};

module.exports = errorHandlerMiddleware;
