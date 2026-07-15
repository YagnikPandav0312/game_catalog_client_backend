const express = require("express");
const router = express.Router();
const logger = require("../middlewares/logger.middleware");
const verifyToken = require("../middlewares/auth.middleware");
const { getCategories } = require("../controllers/categories.controller");

router.get("/getCategories", verifyToken, logger, getCategories);

module.exports = router;
