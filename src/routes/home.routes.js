const express = require("express");
const router = express.Router();
const logger = require("../middlewares/logger.middleware");
const verifyToken = require("../middlewares/auth.middleware");
const { getHome } = require("../controllers/home.controller");

router.get("/home", verifyToken, logger, getHome);

module.exports = router;
