var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/mvc', function(req, res) {
    res.sendFile(path.join(__dirname + '/mvc.html'));
});

var server = app.listen(1999, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Stopwatch app listening at http://%s:%s', host, port);
});