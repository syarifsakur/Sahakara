const express = require("express")
const app = express()
port = 2003
const router= require("./routes/auth")
const cookieParser = require("cookie-parser")

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)




app.listen(port,()=>{
    console.log("berhasil berjalan server di port",port)
})