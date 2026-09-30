// calcular ingresos totales unicamente de compras categoría Elcrtonica completadas

const transacciones = [
{ id: 1, categoria: 'Electrónica', monto: 300, estado: 'completado' },
{ id: 2, categoria: 'Ropa', monto: 50, estado: 'completado' },
{ id: 3, categoria: 'Electrónica', monto: 120, estado: 'fallido' },
{ id: 4, categoria: 'Electrónica', monto: 150, estado: 'completado' }
];

const ingresos = transacciones.filter((el) => 
    el.categoria == 'Electrónica' && el.estado == 'completado')
.reduce((acc, el) => acc += el.monto, 0);

console.log(ingresos);