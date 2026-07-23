const Joi = require('joi');

const playerValidators = (req, res, next) => {
    const email = req.body.email || req.body.username || req.body.user_name;
    const { full_name, password } = req.body || {};
    const playerInfo = {
        email,
        full_name,
        password
    }
    const schema = Joi.object({
        email: Joi.string().email().min(3).max(30).required(),
        full_name: Joi.string().min(3).max(12).required(),
        password: Joi.string().min(3).max(12).required()
    })
    const { error } = schema.validate(playerInfo)
    if (error) {
        return res.status(400).json({
            status: {
                code: 1,
                message: error.details[0].message
            }
        });
    }
    next();
}

module.exports = { playerValidators }