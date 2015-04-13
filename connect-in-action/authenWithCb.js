var app = connect();

app.use(connect.basicAuth(function(user, pass, callback) {
  User.authenticate({user: user, pass: pass}, getUser);

  function gotUser(err, user) {
    if (err) return callback(err);
    callback(null, user);
  }
}));

