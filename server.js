const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
// sendFile ira aqui
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);