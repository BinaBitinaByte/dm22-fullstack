require("dotenv").config();
const express = require("express");
const massive = require("massive");
const authController = require("./controllers/authController");
const session = require("express-session");
const app = express();
const PORT = 5050;

const { CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database connected");
  })
  .catch(err => {
    console.log("There was a massive error");
    console.log(err);
  });

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

app.post("/auth/signup", authController.signup);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
