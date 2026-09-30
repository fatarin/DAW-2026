// crear array de 1 a n (n introducido por teclado)

const paginas = prompt('Dime número de páginas');

parseInt(paginas); 



const numeros = Array.from({length: paginas}, (item, index) => index + 1);
document.write(numeros);