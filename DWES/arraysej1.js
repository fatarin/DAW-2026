// EJERCICIO 1

const productos = [
{ nombre: 'camiseta', precio: 15 },
{ nombre: 'pantalón', precio: 35 },
{ nombre: 'zapatos', precio: 50 },
{ nombre: 'calcetines', precio: 8 }
];


const productosNuevo = productos.filter(producto => producto.precio > 20).map(producto => producto.nombre);

console.log(productosNuevo);





