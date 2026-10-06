const http = require('http');

const routes = require('./routes');

//console.log(routes.someText);

//Tarea 1
const server = http.createServer(routes.handler);

server.listen(3005);