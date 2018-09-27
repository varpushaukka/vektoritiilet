const fs = require('fs')
const express = require('express')

const index = fs.readFileSync('index.html', 'utf8')
const style = fs.readFileSync('style.json', 'utf8')

const app = express()

app.get("/", function(req, res) {
  res.set("Content-Type", "text/html");
  res.send(index);
});

app.get("/style.json", function(req, res) {
  res.set("Content-Type", "application/json");
  res.send(style);
});

app.listen(3001, function() {
  console.log("Listening at localhost:3001");
});