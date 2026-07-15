const express = require("express");
const router = express.Router();
const logger = require("../middlewares/logger.middleware");
const verifyToken = require("../middlewares/auth.middleware");
const {
    registerPlayer,
    loginPlayer,
    getPlayerProfile,
    logoutPlayer
} = require("../controllers/player.controller");

router.post("/register", logger, registerPlayer);
router.post("/login", logger, loginPlayer);
router.get("/me", verifyToken, logger, getPlayerProfile);
router.post("/logout", verifyToken, logger, logoutPlayer);

module.exports = router;
