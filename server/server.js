const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public/')
var app = express();
const port = process.env.PORT || 3000;
var htmlFile= path.join(__dirname, '../public/index.html')

app.use(express.static(publicPath));

app.get('/', function(req, res){
  res.sendfile(publicPath +'index.html')
})

app.listen(port, console.log("app listening on "+ port))
