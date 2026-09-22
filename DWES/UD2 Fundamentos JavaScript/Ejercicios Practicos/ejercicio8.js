const posiciones = ["Nave Halcón", "Nave Rayo", "Nave Sombra", "Nave Cometa"];

//desestructuración de arrays en una sola línea para asignar el primer lugar a la constante oro,
//el segundo a plata y el tercero a bronce.

const [oro, plata, bronce] = posiciones;

const resultado = (primero, segundo, tercero) => 
    'Ganador de Oro: ' + 
    primero +
    ' , Plata: ' +
    segundo + 
    ', Bronce: ' + 
    tercero;


//Imprime por consola: "Ganador de Oro: [oro], Plata: [plata], Bronce: [bronce]".
console.log(resultado(oro, plata, bronce));