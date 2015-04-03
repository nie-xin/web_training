var http = require('http');

var server = http.createServer(function(req, res) {
  res.write('Hello World');
  res.end();
  // or combien them as res.end('Hello World')
});

//bind a port
server.listen(8888);

