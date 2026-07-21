const homeRepo = require("../repositories/casino.repository");
// page, limit, search, sort_by, sort_order, game_types, category, provider, device_types
async function getGames() {
  // const pPage = (page !== undefined && page !== null && page !== '') ? parseInt(page, 10) : null;
  // const pLimit = (limit !== undefined && limit !== null && limit !== '') ? parseInt(limit, 10) : null;
  // const pSearch = search ? String(search) : "";
  // const pSortBy = sort_by ? String(sort_by) : null;
  // const pSortOrder = sort_order ? String(sort_order) : null;
  // const pGameTypes = Array.isArray(game_types) ? game_types : (game_types ? [game_types] : null);
  // const pCategory = category ? String(category) : null;
  // const pProvider = provider ? String(provider) : null;
  // const pDeviceTypes = Array.isArray(device_types) ? device_types : (device_types ? [device_types] : null);
  return await homeRepo.getGames();
  // pPage, pLimit, pSearch, pSortBy, pSortOrder, pGameTypes, pCategory, pProvider, pDeviceTypes
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