const homeService = require("../service/home.service");

async function home(req, res) {
  try {
    const games = await homeService.getGames();
    const providers = await homeService.getProviders();
    const categories = await homeService.getCategories();
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
  getHome: home
};

