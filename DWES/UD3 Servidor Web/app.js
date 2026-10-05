
//Creación de un Servidor
//Importar funciones globales http
const http = require('http'); //busca un modulo global
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit(); 
});

server.listen(3000); //Comienza un proceso de escucha para petición 
                    //server.listen(puerto)


