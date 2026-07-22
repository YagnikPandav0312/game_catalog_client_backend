const pool = require("../config/db");

async function getCasinoHome() {
    let client;
    try {
        client = await pool.connect();
        const query = `SELECT * FROM game_catalog_client.get_casino_home()`;
        const result = await client.query(query);
        return result.rows[0];
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
    getCasinoHome
};
