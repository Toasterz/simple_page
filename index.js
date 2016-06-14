var express = require("express");
var server = express();
var bodyParser = require("body-parser")

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/about', function(request, response){
  response.sendFile('public/html/info.html', {root: __dirname});
});

server.get('/contact', function(request, response){
    response.sendFile('public/html/Contact.html', {root: __dirname});
});

server.post('/contact', function(request, response){
  response.json(request.body);
});

server.listen(8080, function(){
  console.log('now listening on port 8080');
});
