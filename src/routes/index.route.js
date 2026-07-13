const express = require("express");
const app = express();
const logger = require("../middlewares/logger.middleware");
const homeRoutes = require("./home.routes");

app.use("/home", logger, homeRoutes);

module.exports = app;
