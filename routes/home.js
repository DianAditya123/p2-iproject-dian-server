const express = require("express")
const homeController = require("../controllers/home")
const {authentication} = require("../middleware/authentication")
const router = express.Router()

router.get('/type', homeController.showType)
router.get("/ph", homeController.showPh)
router.get('/foto', homeController.foto)
router.use(authentication)
router.post('/cart', homeController.addCart)
module.exports = router