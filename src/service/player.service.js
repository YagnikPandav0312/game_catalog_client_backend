const playerRepository = require("../repositories/player.repository");
const bcrypt = require("../utils/bcrypt");
const jwt = require("../utils/jwt");

async function registerPlayer(fullName, email, password) {
    const hashedPassword = await bcrypt.hashPassword(password);
    return await playerRepository.registerPlayer(fullName, email, hashedPassword);
}

async function loginPlayer(email, password) {
    const player = await playerRepository.getPlayerByEmail(email);
    if (!player) {
        return {
            success: false,
            code: 1,
            message: "Invalid email or password"
        };
    }

    if (!player.is_active) {
        return {
            success: false,
            code: 2,
            message: "Account is inactive"
        };
    }

    const isMatch = await bcrypt.comparePassword(password, player.password);
    if (!isMatch) {
        return {
            success: false,
            code: 1,
            message: "Invalid email or password"
        };
    }

    const token = jwt.generateToken({
        player_id: player.player_id,
        email: player.email,
        full_name: player.full_name
    });

    return {
        success: true,
        code: 0,
        message: "Login successful",
        data: {
            token,
            player: {
                player_id: player.player_id,
                full_name: player.full_name,
                email: player.email
            }
        }
    };
}

async function getPlayerById(playerId) {
    const player = await playerRepository.getPlayerById(playerId);
    if (!player) {
        return {
            success: false,
            code: 1,
            message: "Player not found"
        };
    }

    if (!player.is_active) {
        return {
            success: false,
            code: 2,
            message: "Account is inactive"
        };
    }

    return {
        success: true,
        code: 0,
        data: {
            player: {
                player_id: player.player_id,
                full_name: player.full_name,
                email: player.email
            }
        }
    };
}

async function logoutPlayer(playerId) {
    const result = await playerRepository.logoutPlayer(playerId);
    if (result.code === 0) {
        return {
            success: true,
            code: 0,
            message: result.message || "Logout successful"
        };
    } else {
        return {
            success: false,
            code: result.code,
            message: result.message || "Logout failed"
        };
    }
}

module.exports = {
    registerPlayer,
    loginPlayer,
    getPlayerById,
    logoutPlayer
};
