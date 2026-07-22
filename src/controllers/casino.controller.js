const casinoService = require("../service/casino.service");

async function home(req, res) {
  try {
    const data = await casinoService.getCasinoHome();
    return res.status(200).json({
      data: data,
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

