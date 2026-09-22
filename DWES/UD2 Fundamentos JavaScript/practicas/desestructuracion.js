/*
//======= DESESTRUCTURACION OBJETOS =========


const persona = {name : 'Max', age : 29};

//Extracción parámetros
const printName = ({name}) => {
    console.log(name); // Max

};

printName(persona);

//Extracción directa en declaración
const {name, age} = persona;
console.log(name, age); //Max 29

*/


//======= DESESTRUCTURACION ARRAYS =========

//Criterio extraccion
const hobbies = ['Sports', 'Cooking', 'running'];

//hooby1 toma indice 0, hobby2 el indice 1
//const [hobby1, hobby2] = hobbies; //pedimos las dos primeras posiciones
const [hobby1, , hobby2] = hobbies; //pedimos la posicion 1 y 3, dejando la 2 en blanco

console.log(hobby1); //'sports'
console.log(hobby2); //'cooking' o running según lo que hemos pedido antes
