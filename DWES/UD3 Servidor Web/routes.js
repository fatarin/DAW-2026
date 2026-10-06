

const fs = require('fs');

const requestHandler = ((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html');
        return res.end();
     
    };

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });
        
    };

        
});

    /* //console.log(req.url, req.method, req.headers);
    //process.exit(); 
    //Objetos response y programar directamente html
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title> Mi primera pagina </title></head>')
    res.write('<body><h1>Hola dese mi Servidor en Node.js</h1></body>')
    res.write('</html>')
    res.end();            //indica el final de la cabecera */

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';


