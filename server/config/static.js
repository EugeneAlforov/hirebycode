var express = require('express');

module.exports = function (app) {
  var expressHbs = require('express3-handlebars');

  app.engine('hbs', expressHbs({extname:'hbs'}));
  app.set('view engine', 'hbs');

  app.use('/client', express.static(process.env.PWD + '/client'));
  app.use('/node_modules', express.static(process.env.PWD + '/node_modules'));
  app.get('*', function(req, res) {
    if (req.url.indexOf('/api/') === -1) {
      res.render('index');
    }
  });
};