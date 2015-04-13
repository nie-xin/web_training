var users = {
  tobi: 'foo',
  loki: 'bar',
  jane: 'baz'
};

var app = connect()
  .use(connect.basicAuth(function(user, pass) {
    return users[user] == pass;
  }));

