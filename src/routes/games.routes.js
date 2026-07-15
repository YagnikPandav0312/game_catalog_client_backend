const express = require("express");
const router = express.Router();
const logger = require("../middlewares/logger.middleware");
const verifyToken = require("../middlewares/auth.middleware");
const { getGames } = require("../controllers/games.controller");

router.get("/getGames", verifyToken, logger, getGames);

module.exports = router;
