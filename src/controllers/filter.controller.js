const service = require("../service/filter.service");

async function getClientFilters(req, res) {
    try {
        const data = await service.getClientFilters();
        return res.status(200).json({
            status: {
                code: 0,
                message: "Success"
            },
            data
        });
    } catch (error) {
        return res.status(500).json({
            status: {
                code: 1,
                message: error.message
            }
        });
    }
}

module.exports = {
    getClientFilters
};