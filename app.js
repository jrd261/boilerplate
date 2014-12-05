var express = require('express');
var http = require('http');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'build', 'public')));

app.get('/', function(req, res){
	res.render('index');
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
	console.log('PATH IS ' + __dirname);
});