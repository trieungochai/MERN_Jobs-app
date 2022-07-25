const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
