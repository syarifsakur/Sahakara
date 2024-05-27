const express = require("express")
const app = express()
port = 2003
const db = require("./config/db")

app.get("/",(req,res)=>{
    res.status(200).json({message:"welcome to my app"})
    console.log("berhasill welcome awokawok")
})

app.listen(port,()=>{
    console.log("server berjalan di port",port)
})