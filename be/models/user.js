const db = require("../config/db");

const createUserTable = async () => {
  try {
    await db.query(`
      CREATE TABLE user (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        katasandi VARCHAR(255) NOT NULL,
        nama VARCHAR(255),
        foto VARCHAR(255),
        birthDate VARCHAR(255),
        alamat VARCHAR(255),
        kontak VARCHAR(50) ,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log("Tabel user berhasil dibuat");
  } catch (err) {
    console.error("Gagal membuat tabel user:", err);
  }
};

createUserTable();

module.exports = createUserTable;