const person = {
    name : 'Fernando',
    age : 48,
    greet () {
        console.log('Hola, soy '+ this.name);
    }
};

person.greet();