const express = require("express");
const mongoose = require('mongoose');


//Iniciando o App


//Criamos uma const app para nossa primiera rota
const app = express();

//Iniciando do DB
mongoose.connect('mongodb://localhost:27017/nodeapi',  { useUnifiedTopology: true });


//Primeira rota
app.get('/', (req, res) => {
  res.send("by Doug Caval™  ");
});
//pedimos para ela "ouvir " a porta 3001
app.listen(3001);
