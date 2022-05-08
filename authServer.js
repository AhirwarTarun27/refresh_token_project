require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const accessToken = generateAccesToken(user);
  //refresh token
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

  res.json({ accessToken, refreshToken });
});

function generateAccesToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

app.listen(4000);
