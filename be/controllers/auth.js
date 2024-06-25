const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  tes: async (req, res) => {
    res.send("halo");
    console.log("halo");
  },

  register: async (req, res) => {
    const { email, katasandi,nama,birthdate } = req.body;
    // const foto = req.file

    if (!email ) {
      return res.status(404).json({ message: "harus di isi semua" });
    }
    if (!nama ) {
      return res.status(404).json({ message: "harus di isi semua nama" });
    }
    if (!katasandi ) {
      return res.status(404).json({ message: "harus di isi semua awkawokawok katasanadi" });
    }
    if (!birthdate ) {
      return res.status(404).json({ message: "harus di isi semua birthdate" });
    }
    if (katasandi.length < 8) {
      return res.status(404).json({ message: "password minimal 8 karakter" });
    }
    if (!email.includes("@")) {
      return res.status(404).json({ message: "harus dengan format @" });
    }
    
    try {
      const [cekuser] = await db.query("SELECT * FROM user where email = ?", [
        email,
      ]);
      if (cekuser.length > 0) {
        return res.status(402).json({ message: "email sudah terdaftar" });
      }
      const hashPassword = await bcrypt.hash(katasandi, 10);
      // const fotoPath = `${req.protocol}://${req.get('host')}/${foto.path}`;
      // const fotos = fotoPath.replace(/\\/g, '/')
      const data = await db.query(
        "INSERT INTO user(email, katasandi,nama,birthDate) VALUES(?, ?,?,?)",
        [email, hashPassword, nama,birthdate]
      );
      return res
        .status(201)
        .json({ message: "berhasil tersimpan", data: data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Terjadi kesalahan server" });
    }
  },

  login: async (req, res) => {
    const { email, katasandi } = req.body;

    // Check if email and password are provided
    if (!email || !katasandi) {
      return res
        .status(400)
        .json({ message: "Email dan password harus diisi" });
    }

    try {
      // Check if the email exists in the database
      const [user] = await db.query("SELECT * FROM user WHERE email = ?", [
        email,
      ]);
      if (user.length === 0) {
        return res.status(400).json({ message: "Email tidak terdaftar" });
      }

      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(katasandi, user[0].katasandi);
      if (!isMatch) {
        return res.status(400).json({ message: "Password salah" });
      }

      const token = jwt.sign(
        {
          id: user[0].id,
        },
        "qwertyuiop",
        { expiresIn: "1d" }
      );

      res.cookie("token",token,{
        httpOnly:true,
        maxAge:24*60*60*1000
      })

      return res.status(200).json({
        message: "Login berhasil",
        data: user[0],
        token: token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Terjadi kesalahan server" });
    }
  },

  profil:async(req,res)=>{
    const {id:id} = req.akun;
    try {
      const sql = await db.query("SELECT * FROM user WHERE id=?",[id])
      return res.status(200).json({message:"berhasil",data:sql[0]})
    } catch (error) {
      return res.status(500).json({message:"internal server error"})
    }
  }
};
