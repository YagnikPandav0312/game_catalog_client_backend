const express = require("express");
const app = express();
const casinoRoutes = require("./casino.routes");
const playerRoutes = require("./player.routes");
const sportRoutes = require("./sport.routes");

app.use("/casino", casinoRoutes);
app.use("/sport", sportRoutes);
app.use("/player", playerRoutes);

module.exports = app;
