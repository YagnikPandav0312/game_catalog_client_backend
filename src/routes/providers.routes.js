const express = require("express");
const router = express.Router();
const logger = require("../middlewares/logger.middleware");
const verifyToken = require("../middlewares/auth.middleware");
const { getProviders } = require("../controllers/providers.controller");

router.get("/getProviders", verifyToken, logger, getProviders);

module.exports = router;
