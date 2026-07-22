const express = require("express");
const router = express.Router();
const logger = require("../middlewares/logger.middleware");
const verifyToken = require("../middlewares/auth.middleware");
const { getCasino } = require("../controllers/casino.controller");

router.get("/get_casino_home", verifyToken, logger, getCasino);

module.exports = router;
