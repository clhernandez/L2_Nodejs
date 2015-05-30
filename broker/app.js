var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoskin = require('mongoskin');

//routes
var routes = require('./routes/index');
var auth = require('./routes/auth');
var rrhh = require('./routes/rrhh');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//DBCONF
var serverOptions = {
  'auto_reconnect': true,
  'poolSize': 2
};
var dbR = mongoskin.db('mongodb://localhost:27017/rrhh', serverOptions); 
app.use(function(req, res, next) {
  req.db = {};
  //req.db.tasks = db.collection('tasks');
  req.db.usuarios = dbR.collection('usuarios'); //here
  req.db.departamentos = dbR.collection('departamentos'); //here
  req.db.cargos = dbR.collection('cargos'); //here
  next();
})

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/auth', auth);
app.use('/rrhh',rrhh);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
