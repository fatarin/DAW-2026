const numerosOrdenados = [];


const numeros = (array) => {
    
    while(array.length < 100){
        let aleatorio = Math.floor(Math.random() * 100 + 1);
        if (array.some((el) => el == aleatorio)) continue; 
        else array.push(aleatorio);
    }
    
}

numeros(numerosOrdenados);

console.log('Resultado => ' + numerosOrdenados);
console.log('Tamaño: ' + numerosOrdenados.length);