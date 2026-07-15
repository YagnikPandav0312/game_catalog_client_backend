const express = require("express");
const app = express();
const homeRoutes = require("./home.routes");
const playerRoutes = require("./player.routes");
const gamesRoutes = require("./games.routes");
const providersRoutes = require("./providers.routes");
const categoriesRoutes = require("./categories.routes");

app.use("/home", homeRoutes);
app.use("/player", playerRoutes);
app.use("/games", gamesRoutes);
app.use("/providers", providersRoutes);
app.use("/categories", categoriesRoutes);

module.exports = app;
