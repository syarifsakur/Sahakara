const express = require("express")
const app = express()
require("dotenv").config()
const router= require("./routes/auth")
const cookieParser = require("cookie-parser")
const cors = require("cors")

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.use("/public/upload", express.static("public/upload"))




app.listen(process.env.PORT,()=>{
    console.log("berhasil berjalan server di port",process.env.PORT)
})