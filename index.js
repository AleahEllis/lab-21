var express = require('express'); var app = express();
// respond with "Hello World!" on the homepage
app.get('/api/hello', function (req, res) { res.send('./lyrics');
});
var server = app.listen(3000, function () { var host = server.address().address;
var port = server.address().port;
console.log('Example app listening at http://%s:%s', host, port); });

app.use(express.static(__dirname + '/public'))

//gets the stuff from lyrics.js
var stuff=require('./lyrics')
console.log(stuff[Math.floor(Math.random()*stuff.length)]);