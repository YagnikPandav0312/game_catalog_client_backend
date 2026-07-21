const pool = require("../config/db");
// pPage, pLimit, pSearch, pSortBy, pSortOrder, pGameTypes, pCategory, pProvider, pDeviceTypes
async function getGames() {
    let client;
    try {
        client = await pool.connect();
        const result = await client.query(
            `SELECT * FROM game_catalog_client.get_games()`
        );
        // [pPage, pLimit, pSearch, pSortBy, pSortOrder, pGameTypes, pCategory, pProvider, pDeviceTypes],
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

async function getProviders() {
    let client;
    try {
        client = await pool.connect();
        const query = `SELECT * FROM game_catalog_client.get_providers()`;
        const result = await client.query(query);
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

async function getCategories() {
    let client;
    try {
        client = await pool.connect();
        const query = `SELECT * FROM game_catalog_client.get_categories()`;
        const result = await client.query(query);
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
    getGames,
    getProviders,
    getCategories
};
