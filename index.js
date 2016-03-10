var express = require('express'); 
var app = express();

//gets the stuff from lyrics.js
var stuff=require('./lyrics');
app.get('/api/queenbee', function (req, res) { 
	res.send(stuff[Math.floor(Math.random()*stuff.length)]);
});

var server = app.listen(3000, function () { 
	var host = server.address().address;//configures the server - the ip address
	var port = server.address().port;
	// console.log('Example app listening at http://%s:%s', host, port);
 });

app.use(express.static(__dirname + '/public'));



