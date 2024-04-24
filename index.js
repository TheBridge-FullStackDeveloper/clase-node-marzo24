// let http = require("http");
// const math = require("./math.js");

// console.log(math.sum(2,2));

// http.createServer((req, res) =>{
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Aprendiendo en The Bridge!");
//   })
//   .listen(8080);

// const http = require("http");
// const fs = require('fs');

// http.createServer((req, res) => {
//     fs.readFile('test.html', (err, data) => {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//     });
//   }).listen(8080);

// const url = require('url');
// const adr = 'http://localhost:8080/default.html?year=2017&month=february';
// const q = url.parse(adr, true);

// console.log(q)
// console.log(q.host); //'localhost:8080'
// console.log(q.pathname); //'/default.html'
// console.log(q.search); //'?year=2017&month=february'

// const qdata = q.query; //{ year: 2017, month: 'february' }
// console.log(qdata.month); //'february'

// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// http
//   .createServer((req, res) => {
//     const q = url.parse(req.url, true);
//     const filename = "." + q.pathname;
   
//       fs.readFile(filename, (err, data) => {
//         if (err) {
//           res.writeHead(404, { "Content-Type": "text/html" });
//           console.error(err);
//           return res.end("404 Not Found");
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         return res.end();
//       });
//   })
//   .listen(8080);

const http = require('http');
const to = require('to-case');
console.log("hola2")
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(to.camel('what_the_heck'));
  res.end();
}).listen(8080);
