var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'))

app.listen(3000, function () {
  console.log('ReactMongoToDo App listening on 3000 yo');
});