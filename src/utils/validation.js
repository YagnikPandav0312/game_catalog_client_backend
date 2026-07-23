const Joi = require('joi');
exports.playerRegister = Joi.object({
    email: Joi.string().email().min(3).max(30).required(),
    full_name: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(3).max(12).required()
})
exports.playerLogin = Joi.object({
    email: Joi.string().email().min(3).max(30).required(),
    password: Joi.string().min(3).max(12).required()
})