//mostrar la primera vocal de un texto introducido utilizando metodo include

const texto = prompt('Introduce un texto: ');
const vocales = ['a', 'e', 'i', 'o', 'u'];

const vocal = Array.from(texto)
const buscarVocal = vocal.findIndex((el) => vocales.includes(el));

console.log(buscarVocal);

document.write('La primera vocal del texto introducid es ' + vocal[buscarVocal]);