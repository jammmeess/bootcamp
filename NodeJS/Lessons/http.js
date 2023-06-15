const http = require("http");
const fs = require("fs");
const p = require("path");
const uc = require("upper-case");

http
  .createServer(function (req, res) {
    fs.readFile("list.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8000);

// console.log(p.extname("[absolute location of the html file]"))

// console.log(uc.upperCase("kristoffer"));
