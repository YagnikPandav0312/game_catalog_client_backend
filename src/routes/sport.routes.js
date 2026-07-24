const express = require("express");
const router = express.Router();
const logger = require("../middlewares/logger.middleware");
const verifyToken = require("../middlewares/auth.middleware");
const { getSport } = require("../controllers/sport.controller");

router.get("/get_sport_home", verifyToken, logger, getSport);

module.exports = router;
