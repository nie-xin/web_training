var bodyParser = require('body-parser');
var connect = require('connect');

var app = connect()
  .use(bodyParser())
  .use(function(req, res) {
    res.end('Registered new user: ' + req.body.username);
  }).listen(8888);
