require('rootpath')();
var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/graficos/', require('./controllers/graficos.controller'));

app.get('/', function (req, res) {
  return res.redirect('/graficos');
})

var server = app.listen(3000, function () {
  console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
