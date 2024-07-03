const jwt = require("jsonwebtoken");

const generateAccessToken = (user) =>
  jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: "15m" });

module.exports = { generateAccessToken };
