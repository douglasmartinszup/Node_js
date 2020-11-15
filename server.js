const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o App
const app = express();

//Iniciando do DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
});
requireDir("./src/models");

const Product = mongoose.model("Product");

//Primeira rota
app.get("/", (req, res) => {
  Product.create({
    title: "React Study",
    description: "Build native apps with React -Doug Caval",
    url: "http://github.com/facebook/react-native",
  });

  return res.send("by Doug Caval™  ");
});
//pedimos para ela "ouvir " a porta 3001
app.listen(3001);
