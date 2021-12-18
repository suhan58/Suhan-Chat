const Joi = require("@hapi/joi");

const schema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().uppercase().lowercase().required()
})

module.exports = {
    schema
}