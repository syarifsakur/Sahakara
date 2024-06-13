const db = require("../config/db");

const createBlog = async () => {
  try {
    await db.query(`
      CREATE TABLE blog (
        id INT AUTO_INCREMENT PRIMARY KEY,
        judul VARCHAR(255),
        deskripsi LONGTEXT,
        author VARCHAR(255),
        foto VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log("Tabel user berhasil dibuat");
  } catch (err) {
    console.error("Gagal membuat tabel blog:", err);
  }
};

createBlog();

module.exports = createBlog;
