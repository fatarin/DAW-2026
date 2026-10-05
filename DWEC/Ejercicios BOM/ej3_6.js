const posicionLetra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B','N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

const listadoDNI = [];

const numero = (array) => { 
    let valor = prompt('Dime el DNI: ');
    console.log('valor: ' + valor);
    if (valor == '-1'){
        clearInterval(myInterval);
        const dniModificados = array.map((x) => x + posicionLetra[parseInt(x) % 23]);
        document.write(dniModificados);
    }
    else {
        if(/^[0-9]{8}$/.test(valor)){
            array.push(valor);
            console.log(valor);
            console.log(array);
        }else console.log('El número introducido no es correcto');
    };
};

const myInterval = setInterval(() => numero(listadoDNI), 3000);

myInterval;

console.log(listadoDNI);