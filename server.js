/** ******************** Mark Wen Space v.3 Server Script ****************** **/
/** ************************************************************************ **/

/** ************************** Base Package Setup ************************** **/
"use strict"
var express = require('express');
var compression = require('compression');
var minify = require('express-minify');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
// Log every request to the console
app.use(morgan('dev'));
// Compress everything to speedup
// app.use(compression({threshold: 0}));
// Minify and cache everything
// app.use(minify());
// Configure app to use bodyParser(), which will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());
// Adding expiration and cache-control header
// app.get('/*', (req, res, next) => {
//   res.setHeader("Cache-Control", "public, max-age=2592000");
//   res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
//   next();
// });
// Get local files
process.env.PWD = process.cwd();
app.use(express.static(process.env.PWD + '/'));
// use compression to zip the files
app.use(compression());

/** **************************** Server Running **************************** **/
var port = process.env.PORT || 3000;
app.listen(port, err=> {
  if (err) {
    console.log(err)
  } else {
    console.log('Listening on port ' + port + '.')
  }
});
