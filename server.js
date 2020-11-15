const express = require("express");

//criamos uma const app
const app = express();

app.get('/', (req, res) => {
  res.send("by Doug Caval™  ");
});
//pedimos para ela "ouvir " a porta 3001
app.listen(3001);
