const express = require("express");
const app = express();

// Common imports
const params = require("@packages/common/params");

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000", params);
});
