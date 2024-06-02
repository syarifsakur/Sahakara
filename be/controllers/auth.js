const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = {
  tes: async (req, res) => {
    res.send("halo");
    console.log("halo");
  },

  register: async (req, res) => {
    const { email, katasandi, kontak } = req.body;
    if (!email || !katasandi || !kontak) {
      return res.status(400).json({ message: "harus di isi semua" });
    }
    if (katasandi.length < 8) {
      return res.status(400).json({ message: "password minimal 8 karakter" });
    }
    if (!email.includes("@")) {
      return res.status(400).json({ message: "harus dengan format @" });
    }
    try {
      const [cekuser] = await db.query("SELECT * FROM user where email = ?", [
        email,
      ]);
      if (cekuser.length > 0) {
        return res.status(402).json({ message: "email sudah terdaftar" });
      }
      const hashPassword = await bcrypt.hash(katasandi, 10);
      const data = await db.query(
        "INSERT INTO user(email, katasandi, kontak) VALUES(?, ?, ?)",
        [email, hashPassword, kontak]
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
        { expiresIn: "10s" }
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
};
