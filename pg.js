var pg = require('pg');
var conString = "";

var client = new pg.Client(conString);
client.connect();

var query = client.query(
  "SELECT * FROM users WHERE age > $1",
  [40]
);

query.on('row', function(row) {
  console.log(row.name);
});

query.on('end', function() {
  client.end();
});

