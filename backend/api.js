const fs = require('fs')
const parser = require('body-parser')
const express = require('express')
const app = express()
const port = 1337

app.use(logger);
app.use(parser.urlencoded({extended: true}));

const folderNames = [];

fs.readdirSync(__dirname + '/photos').forEach((file) => {
  folderNames.push(file);
})

app.get('/', (req,res) => {
  res.render('form');
})

app.listen(port, () => {
  console.log("Listening");
})

function logger(req, res, next) {
  next();
}