const express = require("express");
const app = express();

const posts = [
  {
    username: "tarun",
    title: "human",
  },
  {
    username: "umang",
    title: "human",
  },
  {
    username: "vishal",
    title: "human",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000);
