// const http = require('http');
const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 8080;

app.get('/', (req, res) => {
    console.log(req,"request")
    res.json({ info: 'Node.js, Express, and Rest API' }); 
});

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});