const pool = require("../config/db");

async function registerPlayer(fullName, email, hashedPassword) {
    let client;
    try {
        client = await pool.connect();
        const query = `SELECT * FROM game_catalog_client.register($1, $2, $3)`;
        const result = await client.query(query, [fullName, email, hashedPassword]);
        return result.rows[0];
    } catch (error) {
        console.error("Error in registerPlayer repository:", error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}

async function getPlayerByEmail(email) {
    let client;
    try {
        client = await pool.connect();
        const query = `SELECT * FROM game_catalog_client.login_player($1)`;
        const result = await client.query(query, [email]);
        return result.rows[0];
    } catch (error) {
        console.error("Error in getPlayerByEmail repository:", error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}

async function getPlayerById(playerId) {
    let client;
    try {
        client = await pool.connect();
        const query = `
            SELECT player_id, full_name, email, is_active, is_delete 
            FROM game_catalog_client.players 
            WHERE player_id = $1 AND is_delete = false
        `;
        const result = await client.query(query, [playerId]);
        return result.rows[0];
    } catch (error) {
        console.error("Error in getPlayerById repository:", error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}

async function logoutPlayer(playerId) {
    let client;
    try {
        client = await pool.connect();
        const query = `SELECT * FROM game_catalog_client.logout($1)`;
        const result = await client.query(query, [playerId]);
        return result.rows[0];
    } catch (error) {
        console.error("Error in logoutPlayer repository:", error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}

module.exports = {
    registerPlayer,
    getPlayerByEmail,
    getPlayerById,
    logoutPlayer
};
