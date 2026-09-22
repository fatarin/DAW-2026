//1. Definición manual de una Promesa

const fetchData = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Datos recibido');
        }, 1500);
    });
};

//2. Consumo y encadenamiento lineal con .then()
setTimeout(() => {
    console.log('Timer completado');

    fetchData()
    .then(text => {
        console.log(text);
        return fetchData(); // Devuelve una nueva promesa
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);


