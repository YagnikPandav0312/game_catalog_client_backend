const homeService = require("../service/home.service");

async function getGames(req, res) {
    try {
        const games = await homeService.getGames();
        return res.status(200).json({
            data: games,
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
