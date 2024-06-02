const mysql = require("mysql2/promise")

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"tfs",
})

db.getConnection(()=>{
    try {
        console.log("berhasil terhubung ke database")
    } catch (error) {
        console.log("gagal terhubung")
    }
})



module.exports=db