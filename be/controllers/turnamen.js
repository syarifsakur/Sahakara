const db = require("../config/db");

module.exports = {
  addTurnamen: async (req, res) => {
    const { judul, deskripsi, biaya, date ,penyelenggara} = req.body;
    const foto = req.file;
    const { id } = req.params;
    if (!judul || !deskripsi || !biaya || !date || !foto) {
      return res.status(400).json({ message: "kolom harus di isi semua" });
    }
    try {
      const fotoPath = `${req.protocol}://${req.get("host")}/${foto.path}`;
      const fotos = fotoPath.replace(/\\/g, "/");
      const turnamen = await db.query(
        "INSERT INTO turnamen(judul,deskripsi,author,lokasi,foto,biaya_pendaftaran,date) VALUES (?,?,?,?,?,?,?)",
        [judul, deskripsi, penyelenggara, "  Jl. Raya Kedung Baruk, Sempaja Selatan, Samarinda Utara, Kota Samarinda", fotos, biaya, date]
      );
      return res
        .status(201)
        .json({ message: "berhasil tersimpan", data: turnamen });
    } catch (error) {
      return res.status(500).json({ message: "internal server error" });
    }
  },

  getTurnamen: async (req, res) => {
    try {
      const turnamen = await db.query("SELECT * FROM turnamen");
      return res
        .status(200)
        .json({ message: "daftar turnamen", turnamen: turnamen[0] });
    } catch (error) {
      return res.status(500).json({ message: "internal server error" });
    }
  },

  turnamenId:async(req,res)=>{
    const {id} = req.params
    try {
      const turnamen = await db.query(
        "SELECT * FROM turnamen WHERE id=?",
        [id]
      )
      return res.status(200).json({code:200,turnamen:turnamen[0]})
    } catch (error) {
      return res
      .status(500)
      .json({
        message:"internal server error"
      })
    }
  },
  delete:async(req,res)=>{
    try {
      const tur = await db.query(
        "DELETE FROM blog"
      )
      return res.status(200).json({message:"berhsil di hapus"})
    } catch (error) {
      return res.status(500).json({message:"internal server error"})
    }
  }
};
