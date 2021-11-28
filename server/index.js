const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

const options = {
  key: fs.readFileSync('dist/certs/openSSLkey.pem'),
  cert: fs.readFileSync('dist/certs/zoe-emery.com.crt')
};

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(cors());

app.get('/', (req, res) => {
  res.send();
});

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);