const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const verify = require("../middlewares/verify-token")

router.get("/",authController.tes)
router.post("/add",authController.register)
router.post("/login",authController.login)

module.exports = router