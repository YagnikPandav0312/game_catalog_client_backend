const casinoService = require("../service/casino.service");

async function getGames(req, res) {
    try {
        // const { page, limit, search, sort_by, sort_order, game_types, category, provider, device_types } = req.body || {};
        const games = await casinoService.getGames();
        const totalRecords = games.length > 0 ? parseInt(games[0].total_count, 10) : 0;
        const data = games.map(({ total_count, ...rest }) => rest);
        return res.status(200).json({
            data: data,
            totalRecords: totalRecords,
            status: {
                code: 0,
                message: "Games Fetched Successfully",
            },
        });
    } catch (error) {
        return res.status(500).json({
            status: {
                code: 2,
                error: error.message,
                message: "Something Went Wrong",
            },
        });
    }
}

module.exports = {
    getGames
}
