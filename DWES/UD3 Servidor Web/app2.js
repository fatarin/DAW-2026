
//Creación de un Servidor
//Importar funciones globales http
const http = require('http'); //busca un modulo global
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit(); 
    //Objetos response y programar directamente html
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title> Mi primera pagina </title></head>')
    res.write('<body><h1>Hola dese mi Servidor en Node.js</h1></body>')
    res.write('</html>')
    res.end();              //indica el final de la cabecera
});






server.listen(3000); //Comienza un proceso de escucha para petición 
                    //server.listen(puerto)