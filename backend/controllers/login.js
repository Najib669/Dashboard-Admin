const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const json = require("express");
require("dotenv").config({ path: "../config/.env" });
const User = require("../Models/userSchema");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existuser = await User.findOne({ email: email });
    if (!existuser) res.status(400).json({ msg: "you don t have an account" });

    const validatepassword = await bcrypt.compare(password, existuser.password);
    if (!validatepassword) res.status(400).json({ msg: "wrong password" });

    const token = jwt.sign({ email, id: User._id }, process.env.secretKey, {
      expiresIn: "1min",
    });
    res.status(200).json( { existuser, token })

  } catch (error) {
    res.status(500).json({ msg: `something went wrong${error}` });
  }
};
