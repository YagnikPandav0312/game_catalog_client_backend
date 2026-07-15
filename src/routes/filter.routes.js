const express = require("express");
const router = express.Router();
const logger = require("../middlewares/logger.middleware");
const verifyToken = require("../middlewares/auth.middleware");
const { getClientFilters } = require("../controllers/filter.controller");

router.get("/filters", verifyToken, logger, getClientFilters);

module.exports = router;
