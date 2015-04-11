var connect = require('connect');

var hour = 3600000;
var sessionOpts = {
  key: 'app_sid',
  cookie: { maxAge: hour * 24, secure: true }
};

var app = connect()
  .use(connect.favicon())
  .use(connect.cookieParser('keyboard cat'))
  .use(connect.session())
  .use(function(req, res, next) {
    var sess = req.session;
    if (sess.views) {
      res.setHeader('Content-Type', 'text/html');
      res.write('<p>views: ' + sess.views + '</p>');
      res.end();
      sess.views++;
    } else {
      sess.views = 1;
      res.end('welcome to the seesion demo. refresh!');
    }
  });

  app.listen(3000);
