const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const verify = require("../middlewares/verify-token")
const upload = require("../middlewares/upload")

router.get("/",authController.tes)
router.post("/add",upload.single("foto"),authController.register)
router.post("/login",authController.login)
router.get("/profil/:id",authController.profil)

module.exports = router