const express = require("express")
const router = express.Router()
const {signIn, signUp} = require("../controllers/auth")
const accountValidation = require("../middleware/userPatternValidation")

router.post("/register", accountValidation, signUp)

router.post("/login", signIn)

module.exports = router