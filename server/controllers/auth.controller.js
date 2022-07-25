const User = require("../models/User.model");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const newUser = await User.create({ ...req.body });
  const token = newUser.createJWT();

  return res.status(StatusCodes.CREATED).json({
    newUser: { id: newUser._id, name: newUser.name, email: newUser.email },
    token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email/password");
  }

  const loggedInUser = await User.findOne({ email });
  if (!loggedInUser) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  // compare password
  const isPasswordCorrect = await loggedInUser.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  // create token
  const token = loggedInUser.createJWT();

  return res
    .status(StatusCodes.OK)
    .json({
      loggedInUser: {
        id: loggedInUser._id,
        name: loggedInUser.name,
        email: loggedInUser.email,
      },
      token,
    });
};

module.exports = { register, login };
