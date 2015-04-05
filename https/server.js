var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('../.ssh/key.pem'),
  cert: fs.readFileSync('../.ssh/key-cert.pem')
};

https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(3000);

