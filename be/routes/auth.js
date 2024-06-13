const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth")
const blogController = require("../controllers/blog")
const verify = require("../middlewares/verify-token")
const upload = require("../middlewares/upload")

router.get("/",authController.tes)
router.post("/register",upload.single("foto"),authController.register)
router.post("/login",authController.login)
router.get("/profil/:id",verify,authController.profil)

router.post("/blog",upload.single("foto"),blogController.addBlog)
router.get("/blog",blogController.getBlog)

module.exports = router