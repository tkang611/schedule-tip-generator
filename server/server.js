const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('express');

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../src/index.html')); 
})

app.listen(PORT, () => {
  console.log('listening on port 3000');
})

module.exports = app;
