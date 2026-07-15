const pool = require("../config/db");

async function getClientFilters() {
    const query = `SELECT game_catalog_client.get_filters() AS filters`;

    const result = await pool.query(query);

    return result.rows[0].filters;
}

module.exports = {
    getClientFilters
};