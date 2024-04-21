const express = require("express")
const app = express()
const port = 2000
const router = require("./routes/auth")
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use(router)


app.get("/",()=>{
    res.send("berhasil server")
})

app.listen(port,()=>{
    console.log(`berhasil berjalan di server ${port}`)
})