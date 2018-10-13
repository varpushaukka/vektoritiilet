const fs = require('fs')
const express = require('express')
const proxy = require('http-proxy-middleware')


const index = fs.readFileSync('index.html', 'utf8')
const style = fs.readFileSync('style.json', 'utf8')

const app = require('https-localhost')

app.get("/", function(req, res) {
  res.set("Content-Type", "text/html");
  res.send(index);
});

app.get("/style.json", function(req, res) {
  res.set("Content-Type", "application/json");
  res.send(style);
});

app.use("/data", proxy({target: "http://localhost:8080", onProxyReq: (proxyReq, req, res) => {proxyReq.setHeader('x-forwarded-proto', "https")}}))

// app.listen(3001, function() {
//   console.log("Listening at localhost:3001");
// });