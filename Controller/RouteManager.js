const express = require("express");
const app = express();

const noRoute = (req, res) => {
  res.status(404).json({
    status: "404 Error",
    message: "Page not found",
  });
};

module.exports = {
  noRoute,
};
