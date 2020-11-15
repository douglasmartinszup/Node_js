const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require('cors');
//Iniciando o App
const app = express();
app.use(express.json());
//Iniciando do DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
});
requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));
//pedimos para ela "ouvir " a porta 3001
app.listen(3001);
