const express = require('express');
const http = require('http');
// const https = require('https');
// const fs = require('fs');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

// const options = {
//   key: fs.readFileSync("dist/certs/zoe-emery.com.pub", "utf8"),
//   cert: fs.readFileSync("dist/certs/zoe-emery.com.crt", "utf8")
// };

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(cors());

app.get('/', (req, res) => {
  res.send();
});

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(options, app);

httpServer.listen(80);
// httpsServer.listen(443);