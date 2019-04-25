const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const db = req.app.get("db");
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);

  const result = await db.signup([username, hash]).catch(err => {
    res.status(400).json("Username already exists");
  });
  req.session = { username: result.username };
  res.json(result);
};

module.exports = {
  signup
};
