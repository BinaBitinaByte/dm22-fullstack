require("dotenv").config();
const express = require("express");
// massive
// dotenv
// express-session

const app = express();
const PORT = 5050;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
