const pool = require("../config/db");
async function getSport() {
    let client;
    try {
        client = await pool.connect();
        const result = await client.query(
            `SELECT * FROM game_catalog_client.get_sports()`
        );
        return result.rows;
    } catch (error) {
        console.error("Error fetching dashboard statistics:", error);
        throw error;
    } finally {
        if (client) {
            client.release();
        }
    }
}

module.exports = {
    getSport,
};
