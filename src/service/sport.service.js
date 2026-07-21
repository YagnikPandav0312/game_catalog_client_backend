const sportRepo = require("../repositories/sport.repository");

async function getSport() {
    return await sportRepo.getSport();
}

module.exports = {
    getSport,
};