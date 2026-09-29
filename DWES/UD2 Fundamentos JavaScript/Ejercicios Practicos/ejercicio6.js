//declarar funcion arrow que recibe varios argumentos con REST (...)

const prepararCafe = (tamaño, ...ingredientes)  => {
    return console.log('Café ' + tamaño + 'con los siguientes extras: ' + ingredientes.join(', '));
}


//prueba de ejecución con varios argumentos
prepararCafe("Mediano", "Leche de Avena", "Vainilla", "Canela");
prepararCafe("Pequeño", "chocolate");
prepararCafe("Grande", "Vainilla", "Canela");