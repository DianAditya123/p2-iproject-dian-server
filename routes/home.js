const express = require("express")
const homeController = require("../controllers/home")
const router = express.Router()

router.get('/type', homeController.showType)
router.get("/ph", homeController.showPh)
router.get('/foto', homeController.foto)

module.exports = router