var connect = require('connect');
var bodyParser = require('body-parser');

var app = connect()
  .use(bodyParser());

app.listen(8888);
