var debug = require('debug')('MODULE_NAME');
var app = require('../app');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(socket) {
  console.log('A user is connected');
});

app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
