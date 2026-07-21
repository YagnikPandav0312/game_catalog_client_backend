const sportService = require("../service/sport.service");

async function home(req, res) {
  try {
    const sports = await sportService.getSport();
    return res.status(200).json({
      data: {
        sports: sports,
      },
      status: {
        code: 0,
        message: "Sports Fetched Successfully",
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
  getSport: home
};

