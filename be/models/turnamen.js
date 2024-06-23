const db = require("../config/db");

const createTurnamen = async () => {
  try {
    await db.query(`
      CREATE TABLE turnamen (
        id INT AUTO_INCREMENT PRIMARY KEY,
        judul VARCHAR(255),
        deskripsi LONGTEXT,
        author VARCHAR(255),
        lokasi VARCHAR(255),
        foto VARCHAR(255),
        biaya_pendaftaran VARCHAR(255),
        date VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log("Tabel turnamen berhasil dibuat");
  } catch (err) {
    console.error("Gagal membuat tabel turnamen:", err);
  }
};

createTurnamen();

module.exports = createTurnamen;
