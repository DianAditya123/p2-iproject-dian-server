const express = require("express")
const UserController = require("../controllers/user")
const router = express.Router()
const homeRouter = require('./home')

router.post("/register", UserController.register)
router.post('/login', UserController.login)
router.use(homeRouter)

module.exports = router