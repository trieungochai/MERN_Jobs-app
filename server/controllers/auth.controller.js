const register = async (req, res) => {
  return res.send("Register user");
};

const login = async (req, res) => {
  return res.send("Login user");
};

module.exports = { register, login };
