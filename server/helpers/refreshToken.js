const jwt = require("jsonwebtoken");

const generateRefreshToken = (user) =>
  jwt.sign(user, process.env.REFRESH_TOKEN, { expiresIn: "1d" });

module.exports = { generateRefreshToken };
