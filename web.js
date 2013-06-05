var port = process.env.PORT || 5000;
var server = require('http').Server();
var io = require('socket.io').listen(server);
server.listen(port);
console.log("Iniciando...");
io.configure(function () { 
    console.log("Configurando...");
    io.set("transports", ['xhr-polling']);
    io.set("polling duration", 10); 
    io.set("log level", 2);
    io.set('authorization', function (handshakeData, callback) {

        if (handshakeData.headers && handshakeData.headers.cookie) {
            /*
            var cookie = handshakeData.headers.cookie;
            // where SessionStore is an instance of your mongo store
            SessionStore.load(cookie['sioapp.sid'], function (err, session) {
                if (err) {
                  console.log(err);
                }
                else {
                  console.log('Sesión codificada con exito: ', session);
                  handshakeData.session = session;
                }
            });*/
        }
        callback(null, true);
    });
});
var reservas = io
  .of('/reservas')
  .on('connection', function (socket) {
    console.log("Conectado");
    socket.on('identificar', function (usuario, fn) { 
        socket.set('usuario', usuario);
        console.log("Usuario: " + usuario + " se ha conectado");
        fn(true);
    });
    socket.on('notificar', function (data) {
      switch(data.destino) {
          default: // "yo"
            socket.emit('notificar', data);
          break;
          case "ustedes":
            socket.broadcast.emit('notificar', data );
          break;
          case "nosotros":
            reservas.emit('notificar', data);
          break;
      }
    });
    socket.on('pasarela', function (data) {
      switch(data.destino) {
          default: // "yo"
            socket.emit('pasarela', data);
          break;
          case "ustedes":
            reservas.broadcast.emit('pasarela', data );
          break;
          case "nosotros":
            reservas.emit('pasarela', data);
          break;
      }
    });
});