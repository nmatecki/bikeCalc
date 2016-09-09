var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
//var dataRoute = require('./routes/data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
})


app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
