var session = require('express-session');
var express = require('express');
var server = express();

var bodyParser = require('body-parser');
var localDB = 'mongodb://localhost:27017';

var mongoose = require('mongoose');
mongoose.connect(localDB);

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api', require('./server/api'));

require('./server/config/passport.js')(server);
require('./server/config/static.js')(server);

process.env.PWD = process.cwd();

server.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));


server.listen(80, '127.0.0.1', function () {
  console.log('listening on 80!');
});
