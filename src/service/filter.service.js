const repository = require("../repositories/filter.repository");

async function getClientFilters() {
    return await repository.getClientFilters();
}

module.exports = {
    getClientFilters
};