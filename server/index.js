require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const authRouter = require("./routes/auth.router");
const jobsRouter = require("./routes/jobs.router");

// error handler/ middleware
const errorHandlerMiddleware = require("./middleware/error-handler.middleware");
const notFoundMiddleware = require("./middleware/not-found.middleware");

app.use(express.json());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    // TODO: connectDB

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
