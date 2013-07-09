var fs = require('fs')
var buffer = require('buffer')
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf_resp = fs.readFileSync('index.html')
  var resp = buf_resp.toString()
  response.send(resp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
