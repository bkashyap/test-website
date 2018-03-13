var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Yo wassssup dude, this is just a test 2');
};
var www = http.createServer(handleRequest);
www.listen(8081);

