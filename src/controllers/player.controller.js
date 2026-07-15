const playerService = require("../service/player.service");

async function registerPlayer(req, res) {
    try {
        const email = req.body.email || req.body.username || req.body.user_name;
        const { full_name, password } = req.body || {};
        // Validation
        if (!full_name || !email || !password) {
            return res.status(400).json({
                status: {
                    code: 3,
                    message: "Full Name, Email, And Password Are Required"
                }
            });
        }
        const result = await playerService.registerPlayer(full_name, email, password);
        if (result.code === 0) {
            return res.status(201).json({
                status: {
                    code: 0,
                    message: result.message || "Player Registration successful"
                }
            });
        } else {
            return res.status(400).json({
                status: {
                    code: result.code,
                    message: result.message || "Registration failed"
                }
            });
        }
    } catch (error) {
        console.error("Error in registerPlayer controller:", error);
        return res.status(500).json({
            status: {
                code: 2,
                error: error.message,
                message: "something went wrong"
            }
        });
    }
}

async function loginPlayer(req, res) {
    try {
        const email = req.body.email || req.body.username || req.body.user_name;
        const { password } = req.body || {};
        // Validation
        if (!email || !email.trim() || !password) {
            return res.status(400).json({
                status: {
                    code: 3,
                    message: "Email and password are required"
                }
            });
        }
        const result = await playerService.loginPlayer(email, password);
        if (!result) {
            return res.status(200).json({
                status: {
                    code: 1,
                    message: "Invalid Credentials"
                }
            });
        }
        if (result.code === 0) {
            return res.status(200).json({
                data: result.data,
                status: {
                    code: 0,
                    message: result.message || "Player Login successful"
                }
            });
        } else {
            return res.status(200).json({
                status: {
                    code: 1,
                    message: "Invalid Credentials"
                }
            });
        }
    } catch (error) {
        console.error("Error in loginP layer controller:", error);
        return res.status(500).json({
            status: {
                code: 2,
                error: error.message,
                message: "something went wrong"
            }
        });
    }
}

async function getPlayerProfile(req, res) {
    try {
        const result = await playerService.getPlayerById(req.user.player_id);
        if (result.success) {
            return res.status(200).json({
                data: result.data,
                status: {
                    code: 0,
                    message: "Player profile retrieved successfully"
                }
            });
        } else {
            return res.status(404).json({
                status: {
                    code: result.code,
                    message: result.message
                }
            });
        }
    } catch (error) {
        console.error("Error in getPlayerProfile controller:", error);
        return res.status(500).json({
            status: {
                code: 2,
                error: error.message,
                message: "something went wrong"
            }
        });
    }
}

async function logoutPlayer(req, res) {
    try {
        const result = await playerService.logoutPlayer(req.user.player_id);
        if (result) {
            return res.status(200).json({
                status: {
                    code: result.code,
                    message: result.message
                }
            });
        } else {
            if(!result){
                return res.status(200).json({
                    status: {
                        code: 1,
                        message: "Logout Failed"
                    }
                });
            }
            return res.status(200).json({
                status: {
                    code: result.code,
                    message: result.message
                }
            });
        }
    } catch (error) {
        console.error("Error in logoutPlayer controller:", error);
        return res.status(500).json({
            status: {
                code: 2,
                error: error.message,
                message: "something went wrong"
            }
        });
    }
}

module.exports = {
    registerPlayer,
    loginPlayer,
    getPlayerProfile,
    logoutPlayer
};
