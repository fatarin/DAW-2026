const preciosUSD = [20, 10, 5];
console.log(preciosUSD);                                 //mostrar array inicial

//map para crear array nuevo
const preciosEUR = preciosUSD.map((x) => (x * 1.92) + '€');

console.log(preciosEUR);                                //mostrar array nuevo
console.log(preciosUSD);                //validar array inicial no modificado