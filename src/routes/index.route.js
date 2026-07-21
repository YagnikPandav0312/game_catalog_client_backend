const express = require("express");
const app = express();
const casinoRoutes = require("./casino.routes");
const playerRoutes = require("./player.routes");
const gamesRoutes = require("./games.routes");
const providersRoutes = require("./providers.routes");
const categoriesRoutes = require("./categories.routes");
const clientRoutes = require("./filter.routes");
const sportRoutes = require("./sport.routes");

app.use("/casino", casinoRoutes);
app.use("/sport", sportRoutes);
app.use("/player", playerRoutes);
app.use("/games", gamesRoutes);
app.use("/providers", providersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/filters", clientRoutes);
module.exports = app;
