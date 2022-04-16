//rutas

import express from 'express';
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();
const app = express();
//rutas
app.get('/', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/index.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`the server is runnning in ${port}`);
});




/*
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs =require('fs');
//const path = require('path');


// sendFile ira aqui

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

  app.listen(port);
console.log('Server started at http://localhost:' + port);
*/




  //readFIleSync

/*
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs =require('fs');
app.get('/', (resquest, response) => {
    const htmlTemplate = fs.readFileSync("./public/index.html");
    let htmlString = htmlTemplate.toString();
    response.status(200).send(`${htmlString}`);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);*/



