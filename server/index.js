require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// error handler/ middleware
const notFoundMiddleware = require("./middleware/not-found.middleware");
const errorHandlerMiddleware = require("./middleware/error-handler.middleware");

app.use(express.json());

// routes
app.get("/", (req, res) => {
  return res.send("Jobs API");
});

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
