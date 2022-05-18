var app = require('../app');
var http = require('http');
require('../public/js/database');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app).listen(port);


function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }