const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;
  try {
    let user = await User.findOne({ username });

    if (user) return res.status(400).json({ msg: "Username already exists." });

    const securePassword = await bcrypt.hash(password, 10);

    user = new User({
        username,
        email,
        password: securePassword,
        accountType 
    })

    await user.save();

    return res.status(201).json({ success: true, message: "User created successfully!"}) 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const login = (req, res) => {
  const { email, password } = req.body;
};

module.exports = { login, signup };
