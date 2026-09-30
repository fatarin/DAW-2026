const pasajeros = [
{ nombre: 'Luis', check: true, vip: false },
{ nombre: 'Marta', check: true, vip: true },
{ nombre: 'Carlos', check: true, vip: false }
];


// todos los pasajeros han pasado control seguridad

console.log(pasajeros.every((x) => x.check == true));


// algún pasajero es de clase VIP
console.log(pasajeros.some((x) => x.vip == true));