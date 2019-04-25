const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const db = req.app.get("db");
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);

  const result = await db.signup([username, hash]).catch(err => {
    res.status(400).json("Username already exists");
  });
  req.session.user = { username: result[0].username };
  res.json({ username: result[0].username, balance: result[0].balance });
};

const login = async (req, res) => {
  const db = req.app.get("db");

  const results = await db.login(req.body.username);
  if (results[0]) {
    // check the password
    const isMatch = await bcrypt.compare(
      req.body.password,
      results[0].password
    );
    if (isMatch) {
      req.session.user = {
        username: results[0].username,
        balance: results[0].balance
      };
      console.log(results);
      res.json({ username: results[0].username, balance: results[0].balance });
    } else {
      res.status(403).json("Error: Wrong password");
    }
  } else {
    res.status(403).json("Error: Wrong username.");
  }
};

const me = (req, res) => {
  res.json(req.session.user);
};

module.exports = {
  signup,
  login,
  me
};
