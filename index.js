var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
app.use('/rooms/:id',express.static(__dirname + '/client'));

app.listen(3000, function () {
  console.log('listening on port 3000');
});
