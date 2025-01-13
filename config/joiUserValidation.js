const Joi = require("joi")

const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string()
            .min(6)
            .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/) // Kombinasi huruf dan angka
            .required()
            .messages({
                "string.pattern.base": "Username must be a combination of letters and numbers!",
                "string.min": "Username must have at least 6 characters!",
                "any.required": "Username required!"
            }),
        password: Joi.string()
            .min(8)
            .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) // Simbol, huruf besar, huruf kecil, dan angka
            .required()
            .messages({
                "string.pattern.base": "Passwords must consist of uppercase letters, lowercase letters, numbers, and symbols!",
                "string.min": "Passwords must have at least 8 characters!",
                "any.required": "Password required!"
            }),
        repeat_password: Joi.any()
            .valid(Joi.ref("password"))
            .required()
            .messages({
                "any.only": "Password confirmation must be matched!",
                "any.required": "Password confirmation required!"
            }),
    })

    return schema.validate(data)
}

module.exports = {registerValidation}