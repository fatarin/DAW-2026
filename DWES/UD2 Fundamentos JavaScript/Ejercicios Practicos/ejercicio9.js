const desactiva = 1234;                                 // constante para comprobar código


const desactivarBomba = ((codigo) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {                                  //temporizador 2 segundos
            console.log('codigo recibido: ' + desactiva);
            if (codigo === desactiva){                      
                 resolve('¡Bomba desactivada con éxito!')   //código devuelto si resolve
                 } else {
                    reject('¡Código incorrecto!  Boooom')}; //código devuelto si reject
            
        }, 2000);

    });
})

    
    desactivarBomba(1234)
        .then((response) =>     //código a ejecutar si resultado es resolve
            console.log(response)
        )
        .catch((error) =>       //código a ejecutar si resuelto es reject
            console.log(error)
        )
        .finally(() => console.log('Gracias por jugar a nuestro Escape Room!!!'))


