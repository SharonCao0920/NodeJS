const https = require('https');
const fs = require('fs');
const express = require('express');
const startUp = require('./routes/startup');
const getDevice = require('./routes/getDevice');
const getUser = require('./routes/getUser');

const port = 8080
// Create https options
const httpsOptions = {
    key: fs.readFileSync('./ssl//key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
}

// Create an express app
app = express();

// Create a https server
const server = https.createServer(httpsOptions,app);

app.use(express.json());
app.use('/', startUp)
app.use('/', getDevice)
app.use('/', getUser)

app.get('/get-ip', (req, res) => {
  const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send({userIp});
});

server.listen(port, () => {
  console.log('HTTPS is running on port ' + port + '')
}); 
