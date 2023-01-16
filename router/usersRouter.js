const express = require('express')
const router = express.Router()

//Users Page

router.get("/users", usersController)

module.exports = router