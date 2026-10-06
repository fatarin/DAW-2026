const fs = require('fs');


const requestHandler = ((req, res) => {
    const url = req.url;
    const method = req.method;

    //Tarea 2: ruta raiz - formulario entrada
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html');
        return res.end();
     
    };

    //Tarea 3: Ruta de listado (/users)
    if (url === '/users'){

        //lectura asincrona de messageAcumulado, se recibe err (si error) o el valor ledido (lectura)
        fs.readFile('messageAcumulado.txt', 'utf-8', (err, lectura) => {
            if (err) {
                console.log(err);
                return res.end('Error al leer el archivo'); //si error mendaje y fin
            }

            const datos = lectura.split('\n');  //datos leidos string pasamos a Array cortando por salto linea

            res.write('<html>');
            res.write('<head><title>Assignment 1</title></head>');
            res.write('<body>');

            datos.forEach((dato) => {   //leemos array datos y para cada uno vemos si está vacio o lo mostramos
                if (dato.trim() !== '') {
                    res.write(`<li>${dato}</li>`);
                }
            });

            res.write('</body>');
            res.write('</html>');

            return res.end();
        });

        return;
    };

    //Tarea 4 Ruta de Procesamiento (/create-user) y Flujo Datos
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.appendFile('messageAcumulado.txt', message + '\n', err => {
                            res.statusCode = 302;
                            res.setHeader('Location','/');
                            return res.end();
                        });
            
        });
        
    };

    //Tarea 5 Rutas no encontradas (404/Fallback)
    if(url !== '/' && url !== '/create-user' && url !== '/users'){
        res.write('<html>');
        res.write('<head><title>Error Message</title></head>');
        res.write('<body><p>Error 404 - Page not Found!</p</body>');
        res.write('</html');
        return res.end();
    }

    
        
});

exports.handler = requestHandler;