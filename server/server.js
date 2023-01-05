const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../src/index.html')); 
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})

module.exports = app;
