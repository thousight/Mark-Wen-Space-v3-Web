/** ******************** Mark Wen Space v.3 Server Script ****************** **/
/** ************************************************************************ **/

/** ************************** Base Package Setup ************************** **/
"use strict"
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
// Log every request to the console
app.use(morgan('dev'));
// Compress everything to speedup
app.use(compression({threshold: 0}));
// Configure app to use bodyParser(), which will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());
// Get local files
process.env.PWD = process.cwd();
app.use(express.static(process.env.PWD + '/'));

/** **************************** Server Running **************************** **/
var port = process.env.PORT || 3000;
app.listen(port, err=> {
  if (err) {
    console.log(err)
  } else {
    console.log('Listening on port ' + port + '.')
  }
});
