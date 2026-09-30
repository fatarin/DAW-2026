const carrito = [
{ articulo: 'Libro', precio: 15, cantidad: 2 },
{ articulo: 'Bolígrafo', precio: 2, cantidad: 5 },
{ articulo: 'Mochila', precio: 45, cantidad: 1 }
];


//calcular precio total

const precio = carrito.reduce((acc, el) => acc += el.precio * el.cantidad, 0);

console.log('Precio Total: ' + precio);