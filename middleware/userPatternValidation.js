const { registerValidation } = require("../config/joiUserValidation")

const userPatternValidation = (req, res, next) => {
    const {error} = registerValidation(req.body)
    const {username, password} = req.body

    if (!username || !password) {
        return res.status(400).json({message: "Username and password are required"})
    }

    if (error) {
        return res.status(400).json({message: error.details[0].message})
    }
    next()
}

module.exports = userPatternValidation