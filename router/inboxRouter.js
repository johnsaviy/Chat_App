const express = require('express')
const router = express.Router()

//Inbox Page

router.get("/inbox", inboxController)

module.exports = router