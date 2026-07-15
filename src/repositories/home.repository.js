const pool = require("../config/db");

async function getGames(pPage, pLimit, pSearch, pSortBy, pSortOrder, pGameTypes, pCategory, pProvider, pDeviceTypes) {
    let client;
    try {
        client = await pool.connect();
        const result = await client.query(
            `SELECT * FROM game_catalog_client.get_games($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [pPage, pLimit, pSearch, pSortBy, pSortOrder, pGameTypes, pCategory, pProvider, pDeviceTypes],
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
