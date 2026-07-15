const homeService = require("../service/home.service");

async function getCategories(req, res) {
    try {
        const categories = await homeService.getCategories();
        return res.status(200).json({
            data: categories,
            status: {
                code: 0,
                message: "Categories Fetched Successfully",
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
    getCategories
}