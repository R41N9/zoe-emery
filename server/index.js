const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 80;

app.use(compression());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(cors());

app.get('/', (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});