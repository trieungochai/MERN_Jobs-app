const User = require("../models/User.model");
const { StatusCodes } = require("http-status-codes");
// const { BadRequestError } = require("../errors");

const register = async (req, res) => {
  const newUser = await User.create({ ...req.body });
  const token = await newUser.createJWT();

  return res
    .status(StatusCodes.CREATED)
    .json({
      newUser: { id: newUser._id, name: newUser.name, email: newUser.email },
      token,
    });
};

const login = async (req, res) => {
  return res.send("Login user");
};

module.exports = { register, login };
