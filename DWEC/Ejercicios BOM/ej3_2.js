 const valors = [true, 5, false,"hola", "ade", 2];



//comparación caracter a caracter
const texto = valors.filter((x) => typeof(x) == 'string');
 texto.sort((a, b) => a.localeCompare(b));
 console.log(texto); 


 //comparacion longitud cadena texto
  const texto2 = valors.filter((x) => typeof(x) == 'string');
 texto2.sort((a, b) => b.length - a.length);
 console.log(texto2);


 //extraer booleanos
 const booleanos = valors.filter((x) => typeof(x) == 'boolean');
 console.log(booleanos);


 //realizar operaciones con valores numericos
  const suma = valors.filter((x) => typeof(x) == 'number').reduce((acc, el) => {
        acc += el;
        return acc
  }, 0);
 console.log(suma);

