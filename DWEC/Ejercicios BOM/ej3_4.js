//funcion recibe string y muestra informacion de si está compuesta solamente por mayusculas, solamente por minusculas o ambas

const cadena = 'abc';

const comrpuebaCaracter = (x) => {
    
    if (/^[A-Z]+$/.test(x)) console.log('Todas son Mayusculas')
    else if (/^[a-z]+$/.test(x)) console.log('Todas son Minúsculas')
        else console.log('Tiene mayúsculas y minúsculas');
}

console.log(comrpuebaCaracter(cadena));