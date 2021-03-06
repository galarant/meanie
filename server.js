// server.js 
// modules =======================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
//var methodOverride = require('method-override');
var routes         = require('./app/routes');

// configuration =================

// config files
//var db = require('./config/db');

//set our port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public'));

// routes ========================
app.use('*', routes);

// start app =====================
app.listen(port, function(){
  // shoutout to the user
  console.log('Magic happens on port ' + port);
});
