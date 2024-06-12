const jwt = require("jsonwebtoken");
const db = require("../config/db")

module.exports = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(404).json({ message: "incorrect credential" });
  }
  try {
    const jwtToken = token.split(" ").pop();
    const data = jwt.verify(jwtToken, "qwertyuiop");

    if (data === null) {
      return res.status(404).json({ message: "incorrect credential" });
    }
    console.log("nih data cuy", data);

    req.akun = data;
    next();
  } catch (error) {
    return res.status(500).json({ message: "incorrect credential" });
  }
};
