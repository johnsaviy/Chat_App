//External imports
const express = require('express')
const router = express.Router()

//Internal Imports
const { getLogin } = require("../controller/loginController")

//Login Page

router.get("/", getLogin)

module.exports = router