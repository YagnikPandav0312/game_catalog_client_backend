const casinoService = require("../service/casino.service");

async function home(req, res) {
  try {
    const games = await casinoService.getGames();
    const providers = await casinoService.getProviders();
    const categories = await casinoService.getCategories();
    return res.status(200).json({
      data: {
        games: games,
        providers: providers,
        categories: categories,
      },
      status: {
        code: 0,
        message: "Home Fetched Successfully",
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: {
        code: 2,
        error: error.message,
        message: "something went wrong",
      },
    });
  }
}

module.exports = {
  getCasino: home
};

