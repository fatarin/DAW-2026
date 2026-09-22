const pokemonBase = { nombre: 'Pikachu', tipo: 'Eléctrico', nivel: 25 };
const ataques = ['Impactrueno', 'Ataque Rápido'];

//spread para crear un nuevo objeto pokemonMejorado que copie todas las propiedades
//de pokemonBase, añada la propiedad variante: 'Shiny' y aumente el nivel a 50.

const pokemonMejorado = {...pokemonBase, nivel: 50, variante: 'Shiny'};
console.log(pokemonMejorado);

//nuevo array listaAtaques usando spread que contenga los ataques 
//originales más uno nuevo: 'Rayo'
const listaAtaques = [...ataques, 'Rayo'];
console.log(listaAtaques);