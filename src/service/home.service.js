const homeRepo = require("../repositories/home.repository");

async function getGames() {
  return await homeRepo.getGames();
}

async function getProviders() {
  return await homeRepo.getProviders();
}

async function getCategories() {
  return await homeRepo.getCategories();
}

module.exports = {
    getGames,
    getProviders,
    getCategories
};