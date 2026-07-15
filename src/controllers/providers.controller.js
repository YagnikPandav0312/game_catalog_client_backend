const homeService = require("../service/home.service");

async function getProviders(req, res) {
    try {
        const providers = await homeService.getProviders();
        return res.status(200).json({
            data: providers,
            status: {
                code: 0,
                message: "Providers Fetched Successfully",
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
    getProviders
}
