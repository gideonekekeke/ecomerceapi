const express = require("express");
// const mongoose = require('mongoose')

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("we are ready");
});

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
