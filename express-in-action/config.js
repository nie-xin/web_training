// all environments
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
});

// dev environment
app.configure('development', function() {
  app.use(express.errorHandler());
});

