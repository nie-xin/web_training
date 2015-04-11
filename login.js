var connect = require('connect');

var app = connect()
  .use(connect.logger())
  .use(hello)
  .listen(3000);

var fs = require('fs');
var log = fs.createWrtieStream('/var/log/myapp.log', {flags: 'a'});

