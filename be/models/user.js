const db = require("../config/db");

    const createTableUser = async()=>{
        try {
            const userQuery ="CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) , password VARCHAR(255), nama VARCHAR(255), alamat VARCHAR(255))";

            await db.query(userQuery,async()=>{
                try {
                    console.log("tabel berhasil terbuat")
                } catch (error) {
                    console.log(error)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }


module.exports={createTableUser} 
