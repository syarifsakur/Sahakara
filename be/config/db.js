const mysql = require("mysql2")

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"tfs"
})

db.getConnection(async function(err){
    try {
        console.log("database berhasil terhubung")
    } catch (error) {
        console.log("gagal terhubung")
        throw err    
    }
})

module.exports=db