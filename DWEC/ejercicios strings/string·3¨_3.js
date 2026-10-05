//contar el numero de vocales que tiene un texto

const texto = prompt('Introduce un texto: ');
const vocales = ['a', 'e', 'i', 'o', 'u'];

//hacemos array del texto y con reduce contamos los elementos que estan incluidos en el array de vocales
const contarVocales = Array.from(texto).reduce((acc, el) => {
    console.log(el);
    if(vocales.includes(el)) acc += 1;
    return acc; 
}, 0);

document.write('El texto tiene ' + contarVocales + ' vocales');