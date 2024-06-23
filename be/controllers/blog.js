const db = require("../config/db");

module.exports = {
  addBlog: async (req, res) => {
    const { judul, deskripsi, author } = req.body;
    const foto = req.file;
    if (!judul || !deskripsi || !author || !foto) {
      return res.
      status(400)
      .json({ 
        message: "kolom harus di isi semua" 
      });
    }
    try {
      const fotoPath = `${req.protocol}://${req.get("host")}/${foto.path}`;
      const fotos = fotoPath.replace(/\\/g, "/");
      const blog = await db.query(
        "INSERT INTO blog(judul,deskripsi,author,foto) VALUES(?,?,?,?)",
        [judul, deskripsi, author, fotos]
      );
      return res
        .status(201)
        .json({
           message: "berhasil di tambah blog", 
           blog: blog 
          });
    } catch (error) {
      return res
      .status(500)
      .json({ 
        message: "internal server error" 
      });
    }
  },

  getBlog: async (req, res) => {
    try {
      const blog = await db.query(
        "SELECT * FROM blog"
      );
      return res
      .status(200)
      .json({ 
        message: "daftar blog", 
        blog: blog[0] 
      });
    } catch (error) {
      return res
      .status(500)
      .json({ 
        message: "internal server error" 
      });
    }
  },

  blogId: async (req, res) => {
    const { id } = req.params;

    try {
      const blog = await db.query("SELECT * FROM blog WHERE id=?", [id]);

      return res
      .status(200)
      .json({ 
        code: 200, 
        blog: blog[0] 
      });
    } catch (error) {
      return res
      .status(500)
      .json({ 
        message: "internal server error" 
      });
    }
  },
};
