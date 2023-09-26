const https = require('https');
const fs = require('fs');
const express = require('express');
const startUp = require('./routes/startup');
const getDevice = require('./routes/getDevice');

const port = 8080
const httpsOptions = {
    key: fs.readFileSync('./ssl//key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
}

app = express();

const server = https.createServer(httpsOptions,app);

app.use(express.json());
app.use('/', startUp)
app.use('/', getDevice)

// app.get('/get-device', (req, res) => {
//   const whatDeviceIsThis = req.header('User-Agent');
//   //If the device is windows, send a flg: isWindows=true
//   //If the device is mac, send a flg: isMac=true
//   //If the device is linux, send a flg: isLinux=true
  
  
//   res.send({whatDeviceIsThis});
// });

app.get('/get-ip', (req, res) => {
  const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send({userIp});
});

server.listen(port, () => {
  console.log('HTTPS is running on port ' + port + '')
}); 
