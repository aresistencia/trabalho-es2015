var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/public/index.html');
});
// app.use(express.static('public'));

app.listen(3000);
