const productos = [
{ nombre: 'camiseta', precio: 15 },
{ nombre: 'pantalón', precio: 35 },
{ nombre: 'zapatos', precio: 50 },
{ nombre: 'calcetines', precio: 8 }
];


const mas20 = productos.filter((x) => x.precio > 20).map((x) => x.nombre.toUpperCase());

console.log(mas20);