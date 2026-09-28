const inventario = [
{ nombre: 'Teclado Mecánico', precio: 120, stock: true },
{ nombre: 'Monitor 4K', precio: 600, stock: true },
{ nombre: 'Ratón Gaming', precio: 45, stock: false },
{ nombre: 'Auriculares Hifi', precio: 250, stock: true }
];


const stockBarato = inventario.filter((x) => x.precio < 500 && x.stock);

console.log(stockBarato);