const desactivarBomba = (codigo) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if (codigo == 1234){
                 resolve('¡Bomba desactivada con éxito!')
                 } else {
                    reject('¡Código incorrecto!  Boooom')};
            
        }, 2000);

    });
} 

setTimeout(() => {
    //console.log('Timer completado');
    desactivarBomba(1234)
    .then(text => 
        console.log(text);
    )
    .then(text2 =>
        console.log(text2)
    );
}, 2000);

