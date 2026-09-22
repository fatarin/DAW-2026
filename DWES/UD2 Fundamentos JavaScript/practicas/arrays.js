const hobbies = ['Sports', 'Cooking'];

/* for (let hobby of hobbies){
    console.log(hobby);
} */

//hobbies.map(); transforma el array

//con map hacemos accion definida en función para cada valor del array
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));

//version simplificada
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

//muestra el array original
console.log(hobbies);


//añadir elementos al array
hobbies.push('Programming');
console.log(hobbies);


// ========= OPERADOR SPREAD ================

//Copia de Array
const hobbiesCopiados = [...hobbies, 'Dancing']; //copia hobbies y añade
console.log(hobbiesCopiados);

//Copia de Objeto
const persona = {nombre : 'Fernando', edad : 48};
const personaCopiada = {...persona}; //copia persona
console.log(personaCopiada);


// ========= OPERADOR REST ================
const toArray = (...args) => { //todos los parámetros recibidos los agrupa en un Array
    return args;
}

console.log(toArray(1,2,3,4));
