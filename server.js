require('rootpath')();
var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/graficos/', require('./controllers/graficos.controller'));

app.get('/', function (req, res) {
  return res.redirect('/graficos');
})

var server = app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
