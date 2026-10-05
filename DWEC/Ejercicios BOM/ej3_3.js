//array de compración de letra
const posicionLetra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B','N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

const dniUsuario = prompt('Dime el DNI completo, incluyendo la letra');

console.log(dniUsuario);

//revisar si el formato recibido es correcto (8 numeros + 1 string)
const dniNumeros = Array.from(dniUsuario).slice(0,8);   //array con posiciones que deben ser números
const dniLetra = Array.from(dniUsuario).slice(8);   //array con posicion que debe ser letra

//console.log(dniNumeros);
//console.log(dniLetra);


// comprobamos si todos los elementos del array numeros son number y si el elemento del array letra no es number
 if (dniNumeros.every((x) => !isNaN(parseInt(x)))
     && dniLetra.every((x) => isNaN(parseInt(x)))){
     console.log('El número introducido tiene un formato válido')
    
     //calculamos modulo del número del DNI
    const dniPosicion = (parseInt(dniNumeros.join(''))) % 23;


    //comparamos posición obtenida con array posiciones
    if (dniLetra[0].toUpperCase() == posicionLetra[dniPosicion]) console.log('Letra correcta');
        else console.log('Letra incorrecta');
        }    
    else console.log('Número introducido en formato incorrecto'); 





