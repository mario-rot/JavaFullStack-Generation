// const http = require("http");
// const fs = require('fs').promises;


// const host = 'localhost';
// const port = 8000;


// const requestListener = function(req, res) {
//   fs.readFile(__dirname + "/index.html")
//     .then(contents => {
//       res.setHeader("Content-Type", "text/html");
//       res.writeHead(200);
//       res.end(contents);
//     })
//     .catch(err => {
//       res.writeHead(500);
//       res.end("Something went wrong! you have an error somewhere! The server hasn't leaded");
//       return;
//     });
// };

// // const requestListener = function(req, res) {
// //   res.setHeader("Content-Type", "text/html");
// //   res.writeHead(200);
// //   res.end(`<html><body><h1>This is HTML</h1></body></html>`);
// // };


// // const requestListener = function(req, res) {
// //   res.writeHead(200);
// //   res.end("My first server!");
// // };


// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`);
// });

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(__dirname + '/'));

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

// router.get('/about', function(req, res) {
//   res.sendFile(path.join(__dirname + '/about.html'));
// });

// router.get('/sitemap', function(req, res) {
//   res.sendFile(path.join(__dirname + '/sitemap.html'));
// });

//add the router
app.use('/', router);
// app.use('/home/mario-rot/Github/Personal/JavaFullStack/CursoJavaFullStack/Ejercicios/JS/js08/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
